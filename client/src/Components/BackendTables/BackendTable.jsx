import React from 'react';
import "./BackendTable.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function BackendTable() {
    const navigate = useNavigate();
  return (
    <div>
      <>
      <div className="frmBack">
            <button
              className="bttnsE"
              id="svngB"
              onClick={() => navigate("/companytable")
              }
            >
              View Company
            </button>
            <button
              className="bttns"
              id="srB"
              onClick={() =>navigate("/spoctable")}
            >
              View SPOC
            </button>
            <button
              className="bttns"
              id="srA"
              onClick={() =>navigate("/employeetable")}
            >
              View Employee
            </button>
        </div>
      </>
    </div>
  )
}
