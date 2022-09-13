import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Sidebar = () => {
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Client Forms</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <TaskAltOutlinedIcon className="icon" />
              <span>Tasksheet</span>
            </li>
          </Link>
          <li>
            <PeopleOutlineOutlinedIcon className="icon" />
            <span>Master Recruits</span>
          </li>
          <li>
            <BackupTableOutlinedIcon className="icon" />
            <span>Backend Tables</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" onClick={logout}/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;