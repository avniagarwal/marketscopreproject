import React, { useEffect, useMemo, useState } from "react";
import "./EditDelComp.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";

import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Client = () => {
  const [NameofCompany, setNameofCompany] = useState("");
  const [Industry, setIndustry] = useState("");
  const [SPOC, setSPOC] = useState("");
  const [selectiveCompany, setselectiveCompany] = useState("");

  const [CompanyList, setCompanyList] = useState([]);

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

  const getNameofCompany = () => {
    axios.get("http://localhost:3001/NameofCompany").then((response) => {
      setCompanyList(response.data);
      console.log(response);
      console.log("successfull in MS getting data");
    });
  };


  const deleteCompany = (id) => {
    axios.delete(`http://localhost:3001/deleteCompany/${id}`).then((response) => {
      setCompanyList(
        CompanyList.filter((val) => {
          return val.id != id;
        })
      );
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
              getNameofCompany();
            }}
          >
            Search
          </button>

          <select
            name=""
            id="srchA"
            onChange={(event) => {
              setselectiveCompany(event.target.value);
            }}
          >
            {CompanyList.map((val, key) => {
              return (
                <option value={val.NameofCompany}>{val.NameofCompany}</option>
              );
            })}
          </select>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC123">
            <hr />

            {CompanyList.map((val, key) => {
              if (val.NameofCompany == selectiveCompany) {
                return (
                  <div>
                    <div className="frm123">
                      <label htmlFor="name">Name of Company </label>
                      <input
                        type="text"
                        name="name"
                        required="required"
                        defaultValue={val.NameofCompany}
                        onChange={(event) => {
                          setNameofCompany(event.target.value);
                        }}
                      ></input>
                    </div>

                    <hr />

                    <div className="frm123">
                      <label htmlFor="name">Industry </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={val.Industry}
                        onChange={(event) => {
                          setIndustry(event.target.value);
                        }}
                      ></input>
                    </div>

                    <hr />

                    {/* <div className="frm123">
              <label htmlFor="name">Enter SPOC Name</label>
              <input
                type="text"
                name="name" defaultValue={val.SPOC}
                onChange={(event) => {
                  setSPOC(event.target.value);
                }}
              ></input>
            </div> */}

                    {/* <hr /> */}
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div>
        {CompanyList.map((val, key) => {
              if (val.NameofCompany == selectiveCompany) {
                return (
          <button
            className="bttnsE"
            id="del"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete id" + val.id))
                deleteCompany(val.id);
            }}
          >
            Delete
          </button>

);
}
})}
        </div>
      </div>
    </>
  );
};

export default Client;
