import "./Widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Active, Fire, Allocated, Sourcing} from "../Popups/Popups";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../api";

const Widget = ({ type }) => {
  let data;
  const [show, setShow] = useState(false);
  const [allocated, setallocated] = useState('');
  const [active, setactive] = useState('');
  const [fireposition, setfireposition] = useState('');

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/allocatedprofiles")
      .then((response) => {
        console.log(response.data);
        setallocated(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/activeprofiles")
      .then((response) => {
        console.log(response.data);
        setactive(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/firepositions")
      .then((response) => {
        console.log(response.data);
        setfireposition(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  switch (type) {
    case "total profiles":
      data = {
        title: "Total Profiles",
        link: "See all profiles",
        number: "190",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "high priority":
      data = {
        title: "High Priority",
        link: "View high priority profiles",
        number: "10",
        icon: (
          <PriorityHighOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
      case "fire":
      data = {
        title: "Fire Positions",
        link: "View Fire Positions profiles",
        number: fireposition,
        icon: (
          <PriorityHighOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
        modalHead: "Fire Position Profile",
        modalBody: <Fire/>,
      };
      break;
    case "allocated":
      data = {
        title: "Allocated",
        link: "View allocated profiles",
        number: allocated,
        icon: (
          <DoneAllOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        modalHead: "Allocated Profile",
        modalBody: <Allocated/>,
      };
      break;
      case "owner":
        data = {
          title: "Owner",
          link: "Allocation Mode",
          links: "/tasksheetTL",
          number: "4",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{ color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)"}}
            />
          ),
        };
      break;
      case "sourcing":
        data = {
          title: "Sourcing",
          link: "View Sourcing",
          number: "11",
          icon: (
            <AccountCircleOutlined
              className="icon"
              style={{ backgroundColor: "rgb(176,224,230)", color: "deepskyblue" }}
            />
          ),
          modalHead: "Sourcing",
          modalBody: <Sourcing/>,
        };
      break;
      case "active":
        data = {
          title: "Active Profiles",
          link: "View Active Profiles",
          number: active,
          icon: (
            <AccountCircleOutlined
              className="icon"
              style={{ backgroundColor: "rgb(176,224,230)", color: "deepskyblue" }}
            />
          ),
          modalHead: "Active Profile",
          modalBody: <Active/>,
        };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.number}
        </span>
        {data.links && (
          <Link to={data.links} className="linkroute">
            <span className="link" onClick={handleShow} style={{cursor: 'pointer'}}>{data.link}</span>
          </Link>
        )}
          {data.modalBody && 
          <>
        <span className="link" onClick={handleShow} style={{cursor: 'pointer'}}>{data.link}</span>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{data.modalHead}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{data.modalBody}</Modal.Body>
          </Modal>
          </>}
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;