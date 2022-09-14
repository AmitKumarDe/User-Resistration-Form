import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignInImg from "./SignIn_Img";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink,useNavigate } from "react-router-dom";


const Home = () => {
  const history = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
  });

  //   console.log(inputData);

  const [data, setData] = useState([]);

  console.log(inputData);
  const getData = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);

    setInputData(() => {
      return { ...inputData, [name]: value };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inputData;

    if (name === "") {
      toast.error(" name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email address", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is required", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added successfully");
        history("/login");
      localStorage.setItem("userData", JSON.stringify([...data, inputData]));
    }
  };

  return (
    <>
      <div className="container mt-3 ">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                {/* <Form.Label>Enter Your Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={getData}
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                {/* <Form.Label>Enter your Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  onChange={getData}
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                {/* <Form.Label>Enter your Date of Birth</Form.Label> */}
                <Form.Control
                  type="date"
                  onChange={getData}
                  name="dateOfBirth "
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-4"
                controlId="formBasicPassword"
              >
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={getData}
                  name="password"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account
              <span>
                <NavLink to="/LogIn"> SignIn</NavLink>
              </span>
            </p>
          </div>
          <SignInImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
