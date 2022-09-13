import React, { useState, useEffect } from "react";
import Login from "../login/Login";
import "./After.css";
import axios from "axios";
const After = ({ setLoginUser }) => {
  // const username = Login.user.name
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  // const [username, setUser] = useState({
  //   username: "",

  // });

  // const componentDidMount =()=>{
  //   this.getUsername();
  // };

  const getUser = () =>
  {
    axios.get('http://localhost:9002/user/'+localStorage.getItem("email-user"))
    .then((response) =>{
      const data = response.data;
      setUsername(data.name)
      setPosition(data.position);
      console.log(data);
    })
    .catch(()=>{
      console.log('Error retrieving data')
    });
  }

  return (
    <>
      {/* <h1>After login Page</h1> */}
      <h1>Hi, {username}</h1>
      <h1>Position : {position}</h1>
      <button className="button" onClick={() => setLoginUser({})}>
        LogOut
      </button>
    </>
  );
};

export default After;
