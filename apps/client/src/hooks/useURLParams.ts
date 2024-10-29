import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useURLParams = () => {
  const location = useLocation();
  return useMemo(() => queryString.parse(location.search) ?? {}, [location]);
};

export default useURLParams;
