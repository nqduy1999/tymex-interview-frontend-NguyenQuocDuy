import type {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios'
import axios from 'axios'
import { httpClientConfig } from './config'

const { VITE_BASE_API_DOMAIN } = process.env

const apiClient = axios.create({
  baseURL: VITE_BASE_API_DOMAIN,
})

function isUnAuthorized(error: any) {
  return (
    (error.config &&
      error.response &&
      error.response.status ===
        httpClientConfig.ERROR_CODES.SERVICE_UNAVAILABLE) ||
    error.response.status === httpClientConfig.ERROR_CODES.TOO_MANY_REQUEST
  )
}

apiClient.interceptors.request.use(
  request => {
    return request
  },

  error => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (isUnAuthorized(error)) {
      const retryCount = (error.config.retryCount || 0) + 1
      error.config.retryCount = retryCount
      if (retryCount <= httpClientConfig.MAX_RETRY_HTTP) {
        return new Promise((resolve, _) => {
          setTimeout(
            () => {
              resolve(axios(error.config))
            },
            2 * retryCount * httpClientConfig.TIMEOUT_RETRY,
          )
        })
      }
      return new Promise((_, reject) => {
        reject(error)
      })
    }
    return new Promise((_, reject) => {
      reject(JSON.stringify(error.response))
    })
  },
)

export default apiClient

export class HttpRequest {
  static get<T, K = object>(
    url: string,
    option?: AxiosRequestConfig<K>,
    _version = 'v1',
  ) {
    return HttpRequest.request<T>('GET', url.replace('$version', _version), {
      ...option,
    })
  }

  static post<T, K = object>(
    url: string,
    body: K,
    headers?: Record<string, string>,
    _version = 'v1',
  ) {
    return HttpRequest.request<T>('POST', url.replace('$version', _version), {
      data: body,
      headers,
    })
  }

  static put<T>(
    url: string,
    body?: Record<string, string>,
    headers?: AxiosHeaders,
    _version = 'v1',
  ) {
    return HttpRequest.request<T>('PUT', url.replace('$version', _version), {
      data: body,
      headers,
    })
  }

  static request<T>(
    method: Method,
    url: string,
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return apiClient.request<T>({
      ...options,
      method,
      url,
    })
  }
}
