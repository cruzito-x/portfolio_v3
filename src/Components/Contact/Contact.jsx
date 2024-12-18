import { Card, Input } from "antd";

const Contact = () => {
  return (
    <div className="contact my-3">
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold">Contact me</h1>
          <h5 className="font-weight-bold subtitle"> Greet me </h5>
        </div>
      </div>
      <div className="d-flex">
        <div className="row">
          <div className="col-6">
            <Card>

            </Card>
            <Card>
              
            </Card>
            <Card>
              
            </Card>
          </div>
          <div className="col-6">
            <div className="">
              <Input
                placeholder="Your Name"
                size="large"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
