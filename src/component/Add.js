import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Add(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: " ",
    phoneNumber: "",
  });
  
  const onInputChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addStudent = () => {
    axios
      .post("https://studentcrudforlesson.herokuapp.com/api/student/add", user)
      .then((response) => {
        navigate("/");
        console.log(response);
      })
      .catch((error) => {
       console.log(error);
      });
    navigate("/");
  };
  const { firstName, lastName, userName, number } = user;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 bg-dark">
          <input
            type="text"
            className="form-control my-3"
            placeholder="firstName"
            name="firstname"
            value={firstName}
            onChange={(e) => onInputChanged(e)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="lastName"
            name="lastname"
            value={lastName}
            onChange={(e) => onInputChanged(e)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="userName"
            name="username"
            value={userName}
            onChange={(e) => onInputChanged(e)}
          />
          <input
            type="number"
            className="form-control my-3"
            placeholder="Number"
            name="phoneNumber"
            value={number}
            onChange={(e) => onInputChanged(e)}
          />
          <button
            onClick={(e) => addStudent(e)}
            className=" btn btn-primary mb-3 ml-50"
          >
            Add User
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
