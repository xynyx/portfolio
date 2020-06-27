import React from "react"
import { Form, Input, InputNumber, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

const layout = {
  labelCol: {
    span: 8,
  },
  // wrapperCol: {
  //   span: 8,
  // },
}
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
}

export default function Contact() {
  const onFinish = values => {
    console.log(JSON.stringify(values))
  }

  return (
    <div>
      <div className="section--projects">
        <p>contAct</p>

        <Form
          action="{{ SERVICE URL }}"
          method="POST"
          style={{ margin: "auto" }}
          className="container-contact"
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Name"
              style={{ backgroundColor: "transparent" }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input
              placeholder="Email"
              style={{ backgroundColor: "transparent" }}
            />
          </Form.Item>

          <Form.Item name="message">
            <Input.TextArea style={{ backgroundColor: "transparent" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
