import SidebarTL from "../../Components/SidebarTL/SidebarTL";
import Navbar from "../../Components/Navbar/Navbar";
import "./MasterRecruiterForm.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import FilterMR from "../../Components/FilterMR/FilterMR";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MasterRecruiterForm = () => {
  const [recruiter, useRecruiter] = useState('');
  const rows = [
    {
      Recruiter: "Abc",
      PID: "ID 22",
      CVSent: "2",
      PipeLine: "S",
      Name: "def",
      Color: "#B0C4DE"
    },
    {
        Recruiter: "Abc",
        PID: "ID 37",
        CVSent: "2",
        PipeLine: "S",
        Name: "def",
        Color: "#B0C4DE"
    },
    {
        Recruiter: "Abc",
        PID: "ID 38",
        CVSent: "2",
        PipeLine: "S",
        Name: "def",
        Color: "#B0C4DE"
    },
    {
      Recruiter: "DEF",
      PID: "ID 35",
      CVSent: "2",
      PipeLine: "S",
      Name: "def",
      Color: "#FFE4C4"
  }
  ];

  return (
    <>
      <div className="home">
        <SidebarTL />
        <div className="homeContainer">
          <Navbar />
          <h1 style={{ marginTop: '10px' }} className="center-text">Master Recruiter Form</h1>
          <div className="mastForm">
          <div className="form-option1">
              <FilterMR />
          </div>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default MasterRecruiterForm