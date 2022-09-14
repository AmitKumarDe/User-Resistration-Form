import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignInImg from "./SignIn_Img";
import {Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const LogIn = () => {
  const history = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  //   const [data, setData] = useState([]);
  console.log(inputData);

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInputData(() => {
      return {
        ...inputData,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("userData");
    console.log(getUserArr);

    const { email, password } = inputData;
    if (email === "") {
      alert("email field is required", {});
    } else if (!email.includes("@")) {
      alert("plz enter valid email address", {});
    } else if (password === "") {
      alert("password field is required", {});
    } else if (password.length < 5) {
      alert("password length greater five", {});
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userlogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        console.log(userlogin);

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login successfully");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/welcome");
        }
      }
    }
  };

  return (
    <>
      <div div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <div className="form__signupLink mb-3">
              <p>
                Don't Have An Account? <Link to="/">Signup !</Link>
              </p>
            </div>
          </div>
          <SignInImg />
        </section>
      </div>
    </>
  );
};

export default LogIn;
