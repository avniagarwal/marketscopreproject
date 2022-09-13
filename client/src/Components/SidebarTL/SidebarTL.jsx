import "./SidebarTL.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidebarTL = () => {
  const [option, setOption] = useState(false);
  const handleClick = async () => {
    setOption(!option);
  }
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
}
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MarketScope</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <div style={{ textDecoration: "none" }} onClick={handleClick}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Client Forms</span>
            </li>
          </div>
          {option && 
            <div>
              <Link to="/client" style={{ textDecoration: "none" }}>
              <li>
                <span>Job Profile Entry</span>
              </li>
              </Link>
              <Link to="/edit" style={{ textDecoration: "none" }}>
                <li>
                  <span>Job Profile Edit</span>
                </li>
              </Link>
              <Link to="/mass" style={{ textDecoration: "none" }}>
                <li>
                  <span>Change Priority</span>
                </li>
              </Link>
            </div>}
          <Link to="/tasksheetTL" style={{ textDecoration: "none" }}>
            <li>
              <TaskAltOutlinedIcon className="icon" />
              <span>Tasksheet</span>
            </li>
          </Link>
          <Link to="/master_recruiter_form" style={{ textDecoration: "none" }}>
          <li>
            <PeopleOutlineOutlinedIcon className="icon" />
            <span>Master Recruits</span>
          </li>
          </Link>
           <Link to="/firepositions" style={{ textDecoration: "none" }}>
            <li>
              <PriorityHighOutlinedIcon className="icon" />
              <span>Fire Positions</span>
            </li>
          </Link>
          <Link to="/backendtables" style={{ textDecoration: "none" }}>
          <li>
            <BackupTableOutlinedIcon className="icon" />
            <span>Backend Tables</span>
          </li>
          </Link>
          <li onClick={logout} >
            <ExitToAppIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarTL;