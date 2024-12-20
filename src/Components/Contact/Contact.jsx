import React from "react";
import { Card, Input, Button, Form } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  DiscordOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="contact my-3" id="contact">
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold">Contact Me</h1>
          <h5 className="font-weight-bold subtitle">Greet me</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12 mt-3">
            <Card style={{ height: "100%", textAlign: "center" }}>
              <h5 className="mb-4 font-weight-bold">Found Me</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31011.267681683865!2d-89.1836785!3d13.6936937!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2ssv!4v1734722417868!5m2!1ses-419!2ssv"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Found Me"
              ></iframe>
            </Card>
          </div>

          <div className="col-md-6 col-sm-12 mt-3">
            <Card>
              <h5 className="font-weight-bold mb-3">Contact with me</h5>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea placeholder="Put your message here" style={{ height: "115px", resize: "none" }}/>
                </Form.Item>
                <Form.Item>
                  <Button className="btn btn-primary" htmlType="submit" block>
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
