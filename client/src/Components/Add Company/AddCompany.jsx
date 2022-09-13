import React, { useEffect, useMemo, useState } from "react";
import "./AddCompany.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";
import { Navigate, useNavigate } from "react-router-dom";
import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Client = () => {
  const [NameofCompany, setNameofCompany] = useState("");
  const [Industry, setIndustry] = useState("");
  const [SPOC, setSPOC] = useState("");

  const navigate = useNavigate();


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
            <button className="bttns" id="sr13" onClick={() => refreshPage()}>
              New
            </button>
            <button className="bttns" id="sr2" onClick={() =>navigate("/editdelcomp")}>
              Edit/Delete
            </button>
          </label>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC123">
            <hr />

            <div className="frm123">
              <label htmlFor="name">Name of Company </label>
              <input
                type="text"
                name="name"
                required="required"
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
                onChange={(event) => {
                  setIndustry(event.target.value);
                }}
              ></input>
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
