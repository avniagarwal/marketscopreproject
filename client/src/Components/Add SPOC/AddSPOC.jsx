import React, { useEffect, useMemo, useState } from "react";
import "./AddSPOC.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";
import { Navigate, useNavigate } from "react-router-dom";
import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Client = () => {
  const [NameofCompany, setNameofCompany] = useState("");
  const [SPOC, setSPOC] = useState("");
  const [CompanyList, setCompanyList] = useState([]);

  const getNameofCompany = () => {
    axios.get("http://localhost:3001/NameofCompany").then((response) => {
      setCompanyList(response.data);
      console.log(response);
      console.log("successfull in MS getting data");
    });
  };

  React.useEffect(() => {
    getNameofCompany();
  }, []);


  const navigate = useNavigate();

  //Adding new entry into db from CDF
  const adSPOC = () => {
    axios
      .post("http://localhost:3001/addSPOC", {
        NameofCompany: NameofCompany,
        SPOC: SPOC,
      })
      .then(() => {
        console.log("success added a new spoc to SPOC table");
        alert("Succesfully Submitted ");
        refreshPage();
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
                  adSPOC();
              }}
            >
              Save
            </button>
            <button className="bttns" id="sr13" onClick={() => refreshPage()}>
              New
            </button>
            <button className="bttns" id="sr2" onClick={() =>navigate("/editdelspoc")}>
              Edit/Delete
            </button>
          </label>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC123">
            <hr />

            <div className="frm123">
              <label htmlFor="posCSP">Name of Company </label>
              <select
                name="company"
                id="posCSP"
                type="text"
                onChange={(event) => {
                  setNameofCompany(event.target.value);
                }}
                required
              >
                <option value="" disabled selected>
                  Select option
                </option>
                {CompanyList.map((val, key) => {
                  return (
                    <option value={val.NameofCompany}>
                      {val.NameofCompany}
                    </option>
                  );
                })}
              </select>
            </div>


            <hr />

            <div className="frm123">
              <label htmlFor="name">Enter SPOC Name</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setSPOC(event.target.value);
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
