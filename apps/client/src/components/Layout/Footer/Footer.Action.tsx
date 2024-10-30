import { Button, Col, Form, Input, Row } from 'antd'
import footerModule from './Footer.module.scss'

const FooterAction = () => {
  const [form] = Form.useForm()

  const onFinish = (values: { name: string }) => {
    console.log(values)
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={[8, 8]}>
        <Col md={14} xs={24}>
          <Form.Item
            name="email"
            className="w-full"
            rules={[
              {
                type: 'email',
                message: `Email is invalid`,
              },
            ]}
          >
            <Input placeholder="Your email address" />
          </Form.Item>
        </Col>
        <Col md={10} xs={24}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={footerModule.footer_button_action}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default FooterAction
