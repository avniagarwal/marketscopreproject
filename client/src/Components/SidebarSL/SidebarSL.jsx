import "./SidebarSL.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const SidebarTL = () => {
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
              <span>Recruiter Forms</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <TaskAltOutlinedIcon className="icon" />
              <span>Tasksheet</span>
            </li>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Client Forms</span>
            </li>
          </Link>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarTL;