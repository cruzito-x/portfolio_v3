import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Card, Input, Form } from "antd";
import "../../styles/contact.css";
import Send from ".././../assets/svg/send.svg";

const Contact = () => {
  const [form] = Form.useForm(); // Hook de Ant Design para formularios.

  const sendEmail = (values) => {
    emailjs
      .send(
        "service_zw3pu9r",
        "template_02xr7rq",
        values,
        "Wv5RQ-GtYRv-LL3O9"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonText: "Accept",
            confirmButtonColor: "#267cec",
          });
          form.resetFields(); // Limpia el formulario tras un envío exitoso.
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: error.text,
            icon: "error",
            confirmButtonText: "Accept",
            confirmButtonColor: "#267cec",
          });
        }
      );
  };

  return (
    <div className="contact my-3" id="contact">
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold">Contact Me</h1>
          <h5 className="font-weight-bold subtitle">Greet Me</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12 mt-3">
            <Card
              className="text-center"
              style={{
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              hoverable
            >
              <h5 className="mb-4 font-weight-bold">Found Me</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31011.267681683865!2d-89.1836785!3d13.6936937!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2ssv!4v1734722417868!5m2!1ses-419!2ssv"
                width="100%"
                height="410"
                style={{ border: 0 }}
                loading="lazy"
                title="Found Me"
              ></iframe>
            </Card>
          </div>

          <div className="col-md-6 col-sm-12 mt-3">
            <Card
              hoverable
              style={{
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <h5 className="font-weight-bold mb-3"> Write Me a Message </h5>
              <Form
                layout="vertical"
                form={form} // Enlaza el formulario con Form.useForm().
                onFinish={sendEmail} // Ejecuta cuando pasa validaciones.
              >
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
                  <Input.TextArea
                    placeholder="Your message here"
                    style={{ height: "115px", resize: "none" }}
                  />
                </Form.Item>
                <Form.Item>
                  <button className="btn btn-primary w-100 p-3">
                    <span>
                      Send Message <img src={Send} alt="Send Icon" />
                    </span>
                  </button>
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
