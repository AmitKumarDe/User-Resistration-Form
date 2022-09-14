import React, { useEffect,useState } from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

  

    
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };


  useEffect(() => {
    Birthday();
}, [])


  return (
    <div>
      {logindata.length === 0 ? (
        "Error"
      ) : (
        <>
          <h1>Welcome Back 😄 {logindata[0].name} 💝</h1>
          <Button onClick={userlogout}>LogOut</Button>
        </>
      )}
    </div>
  );
};

export default Welcome;
