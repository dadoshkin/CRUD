import React from "react";
import { Link } from "react-router-dom";

export default function Student(props) {
  console.log(props.post);
  return (
    <div className="container">
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
          {props.post.length &&
            props.post.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.username}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <Link  className="btn btn-success" to={`/edit/${item.id}`}>Edit</Link>
                  <button onClick={()=>props.delete(item.id)} className="btn btn-warning mx-3">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
