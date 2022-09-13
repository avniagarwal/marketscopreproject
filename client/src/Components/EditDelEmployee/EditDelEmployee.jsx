import React, { useEffect, useMemo, useState } from "react";
import "./EditDelEmployee.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";

import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Client = () => {
  const [NameofCompany, setNameofCompany] = useState("");
  const [Industry, setIndustry] = useState("");
  const [SPOC, setSPOC] = useState("");
  const [selectiveEmployee, setselectiveEmployee] = useState("");

  const [empId, setempId] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [position, setposition] = useState("");

  const [EmployeeList, setEmployeeList] = useState([]);

  //Adding new entry into db from CDF
  const adCompany = () => {
    axios
      .post("http://localhost:3001/addcompany", {
        NameofCompany: NameofCompany,
        Industry: Industry,
        SPOC: SPOC,
      })
      .then(() => {
        console.log("success");
        alert("Succesfully Submitted in Company Table");
        adSPOC();
      });
  };

  const adSPOC = () => {
    axios
      .post("http://localhost:3001/addSPOC", {
        NameofCompany: NameofCompany,
        SPOC: SPOC,
      })
      .then(() => {
        console.log("success in submitting to SPOC table");
        refreshPage();
      });
  };

  const getEmployeeDet = () => {
    axios.get("http://localhost:3001/MSRep").then((response) => {
      setEmployeeList(response.data);
      console.log(response);
      console.log("successfull in MS getting data");
    });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3001/deleteEmployee/${id}`)
      .then((response) => {
        setEmployeeList(
          EmployeeList.filter((val) => {
            return val.id != id;
          })
        );
        alert("Succesfully deleted");
      });
  };

  const updateEmployee = (id) => {
    axios
      .put("http://localhost:3001/updateEmployee", {
        username: username,
        email: email,
        password: password, 
        position: position,
        id: id,
      })
      .then((response) => {
        setEmployeeList(
          EmployeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  username: username,
                  email: email,
                  password: password, 
                  position: position,
                }
              : val;
          })
        );
        alert("Successfully Updated Employee:" + id);
      });
  };


  const handleinit = (event) => {
    setselectiveEmployee(event.target.value);
    const sid = event.target.value;
    EmployeeList.map((val, key) => {
      if (val.username == sid) {
        setempId(val.id);
       setusername(val.username);
       setemail(val.email);
       setpassword(val.password);
       setposition(val.position);
       console.log(val.position);
      }
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
                  adCompany();
              }}
            >
              Save
            </button>
            <button className="bttns" id="sr1" onClick={() => refreshPage()}>
              New
            </button>
          </label>
          <button
            className="bttns"
            id="srEA"
            onClick={() => {
              getEmployeeDet();
            }}
          >
            Search
          </button>

          <select
            name=""
            id="srchA"
            onChange={(e) => {
              handleinit(e);
            }}
          >
            {EmployeeList.map((val, key) => {
              return <option value={val.username}>{val.username}</option>;
            })}
          </select>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC123">
            <hr />

            {EmployeeList.map((val, key) => {
              if (val.username == selectiveEmployee) {
                return (
                  <div>
                    <div className="frm123">
                      <label htmlFor="name">Username </label>
                      <input
                        type="text"
                        name="name"
                        required="required"
                        defaultValue={val.username}
                        onChange={(event) => {
                          setusername(event.target.value);
                        }}
                      ></input>
                    </div>

                    <hr />

                    <div className="frm123">
                      <label htmlFor="name">Email Id </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={val.email}
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
                        defaultValue={val.password}
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
                        defaultValue={val.position}
                        onChange={(event) => {
                          setposition(event.target.value);
                        }}
                      ></input>
                    </div>

                    <hr />
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div>
          {EmployeeList.map((val, key) => {
            if (val.username == selectiveEmployee) {
              return (
                <div>
                <button
                  className="bttnsE"
                  id="del"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete id" + val.id
                      )
                    )
                      deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
                <button
                className="bttnsE"
                id="up"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you wish to Update id" + val.id
                    )
                  ) {
                    updateEmployee(val.id);
                  }
                }}
              >
                {" "}
                Update
              </button>
              </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Client;
