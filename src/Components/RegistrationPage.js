import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const RegistrationPage = () => {
  const initialValue = {
    username: "",
    lastName: "",
    email: "",
    password: "",
    cnfpassword: "",
  };
  const [formValues, setValues] = useState(initialValue);
  const [formError, setError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      console.log('i am clicked')
    e.preventDefault();
    setError(Validate(formValues));
    setisSubmit(true);
  };
  useEffect(() => {
    console.log("use rffect");
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formError]); 

  const Validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username required!";
    }
    if (!values.email) {
      errors.email = "email required!";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a validate email format";
    }
    if (!values.password) {
      errors.username = "Username required!";
    } else if (values.password < 4) {
      errors.email = "this is not a validate password";
    } else if (values.password > 10) {
      errors.email = "this is not a validate password";
    }
    if (!values.cnfpassword) {
        errors.username = "Username required!";
      } else if (values.cnfpassword < 4) {
        errors.email = "this is not a validate password";
      } else if (values.cnfpassword > 10) {
        errors.email = "this is not a validate password";
      }
    return errors;
  };
  return (
    <>
      <div id="background-main" className="background-main-div ">

      {Object.keys(formError).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

        <form >
          {/* <pre>{JSON.stringify(formValues,undefined, 2)}</pre> */}
          <Container className="body-container justify-content-center ">
            <h3 className="register-heading text-center">Register Form</h3>
            <p className="text-center">
              Create your account. It's free and only takes a minute.
            </p>

            <Row className="name">
              <Col className="col-sm-12 col-md-6 col-lg-6 col-for-name">
                <div className="field">
                  <label className="label-name"> Name </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    placeholder="Name "
                    className="name-box"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </div>
                <p>{formError.username}</p>
              </Col>
              <Col className="col-sm-12 col-md-6 col-lg-6 col-for-Lname">
                <div className="field">
                  <label className="label-name">Last Name </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name "
                    className="Lname-box"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                </div>
                <p>{formError.lastname}</p>
              </Col>
            </Row>
            <div className="field">
              <label className="label-name Email"> Email I'D </label> <br />
              <input
                placeholder="Email"
                name="email"
                type="text"
                className="email-box"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formError.email}</p>
            <div className="field">
              <label className="label-name Password"> Password </label>
              <br />
              <input
                placeholder="Password"
                name="password"
                type="password"
                className="password-box"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formError.password}</p>
            <div className="field">
              <label className="label-name cnf-password">
                {" "}
                Confirm Password{" "}
              </label>
              <br />
              <input
                placeholder="Confirm Password"
                name="cnfpassword"
                type="password"
                className="confirm-password-box"
                value={formValues.cnfpassword}
                onChange={handleChange}
              />
            </div>
            <p>{formError.cnfpassword}</p>
            <div className="submit-btn-div mt-3">
              <Button className="submit-btn pl-5 pr-5 mb-3" variant="primary" onClick={handleSubmit}>
                Submit
              </Button>{" "}
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
