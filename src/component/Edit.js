import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Edit() {
  const { id } = useParams();
  const navigate=useNavigate()
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phoneNumber: "",
  });
  const getStudent = () => {
    axios
      .get("https://studentcrudforlesson.herokuapp.com/api/student/get")
      .then((res) => {
        console.log(res.data)
        const myStudent=res.data.find(student1 => student1.id == id)
        console.log(myStudent);
        setUser(myStudent)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudent()
  },[])
  const editUser = () => {
    axios
      .post(`https://studentcrudforlesson.herokuapp.com/api/student/update/${id}`, user)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };
  const { firstname, lastname, username, phoneNumber } = user;
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
            value={firstname}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="lastName"
            name="lastname"
            value={lastname}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="userName"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="number"
            className="form-control my-3"
            placeholder="Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => onInputChange(e)}
          />
          <button
            onClick={() => editUser()}
            className=" btn btn-primary mb-3 ml-50"
          >
            Edit User{" "}
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
