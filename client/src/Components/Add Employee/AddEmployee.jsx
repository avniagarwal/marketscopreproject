import React, { useEffect, useMemo, useState } from "react";
import "./AddEmployee.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";
import { Navigate, useNavigate } from "react-router-dom";
import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Client = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [position, setposition] = useState("");

  const navigate = useNavigate();


  //Adding new entry into db from CDF
  const adEmployee = () => {
    axios
      .post("http://localhost:3001/addemployee", {
        username: username,
        email: email,
        password: password,
        position: position,
      })
      .then(() => {
        console.log("success");
        alert("Succesfully Submitted in Login Table");
      });
  };



  //to refresh the page after submit
  function refreshPage() {
    window.location.reload();
  }


  return (
    <>
      <div className="fin">
        <div className="frm">
          <label htmlFor="pos">
            <button
              className="bttns"
              id="svng1"
              type="submit"
              onClick={() => {
                if (window.confirm("Are you sure you want to submit?"))
                  adEmployee();
              }}
            >
              Save
            </button>
            <button className="bttns" id="sr13" onClick={() => refreshPage()}>
              New
            </button>
            <button className="bttns" id="sr2" onClick={() =>navigate("/editdelemployee")}>
              Edit/Delete
            </button>

          </label>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC123">
            <hr />

            <div className="frm123">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="name"
                required="required"
                onChange={(event) => {
                  setusername(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <div className="frm123">
              <label htmlFor="name">Email Id</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <div className="frm123">
              <label htmlFor="name">Password</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <div className="frm123">
              <label htmlFor="name">Position</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setposition(event.target.value);
                }}
              ></input>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
