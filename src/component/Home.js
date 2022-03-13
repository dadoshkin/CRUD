import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [err, setErrors] = useState(null);
  useEffect(() => {
    console.log("Hello world");
    getStudent()
  }, []);
  const getStudent = () => {
    axios
      .get("https://studentcrudforlesson.herokuapp.com/api/student/get")
      .then((res) => {
        console.log(res.data)
       setStudents(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUser = (id) => {
    axios
    .delete(`https://studentcrudforlesson.herokuapp.com/api/student/delete/${id}`)
    .then((res)=>{
      getStudent()
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="container">
      <h2>Hello</h2>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">firstname</th>
              <th scope="col">lastname</th>
              <th scope="col">username</th>
              <th scope="col">phoneNumber</th>
              <th className=" align-items-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length &&
              students.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.phoneNumber}</td>
                  <td>
                    <Link  className="btn btn-success" to={`/edit/${item.id}`}>Edit</Link>
                    <button onClick={()=>deleteUser(item.id)} className="btn btn-warning mx-3">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
    </div>
  );
}
