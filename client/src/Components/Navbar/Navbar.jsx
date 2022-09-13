import "./Navbar.scss";
import React from "react"
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

const Navbar = ({ setLoginUser }) => {
  const [role, setrole] = React.useState('');
  const [username, setUsername] = useState("");
  const [tl, settl] = useState(false);
  const [recruiter, setrecruiter] = useState(false);
  const [sl, setsl] = useState(false);
  
  const handleChange = (event) => {
    setrole(event.target.value);
    console.log("hia",role);
  };


  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setUsername(localStorage.getItem('username'))
    if(localStorage.getItem('tl') === "true"){
      settl(true)
      setrole('Team Leader')
    }
    if(localStorage.getItem('recruiter') === "true"){
      setrecruiter(true)
    }
    if(localStorage.getItem('sl') === "true"){
      setsl(true)
    }
  };


  return (
    <div className="navbar1">
      <div className="wrapper1">
        <div className="item1">
          <h6 className="item1">Hi, {username}</h6>
        </div>
        <div className="items1">
          <h6 className="item1" style={{fontSize: 'medium'}} id="rl">Select Role:  </h6>
        <Select
          value={role}
          onChange={(event) => setrole(event.target.value)}
          style={{width: '100px', height: '30px', color:'black'}}
        >
        <Link to="/DashboardSL" style={{ textDecoration: "none", color: "black" }}>
          {sl && <MenuItem value="Sourcing Lead">Sourcing Lead</MenuItem>}
        </Link>
        <Link to="/DashboardRecruiter" style={{ textDecoration: "none", color: "black" }}>
          {recruiter && <MenuItem value="Recruiter">Recruiter</MenuItem>}
        </Link>
        <Link to="/DashboardTL" style={{ textDecoration: "none", color: "black" }}>
          {tl && <MenuItem value="Team Leader">Team Leader</MenuItem>}
        </Link>
        </Select>
          
          <div className="item1">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
