import SidebarSL from "../../Components/SidebarSL/SidebarSL";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import "./DashboardSL.scss";
import DatePicker from 'react-date-picker'
import TableRecruiter from "../../Components/TableRecruiter/TableRecruiter";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api";
import JDDropdown from "../../Components/JDDropdown/JDDropdown";

const DashboardRecruiter = () => {
  const [date, setDate] = useState("");
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [disable, setDisable] = useState(false);
  const [records, setrecords] = useState([]);
  const [today, setToday] = useState("");
  const [passdate, setpassdate] = useState(new Date());
  const [leaveDate, setLeaveDate] = useState("");
  const [displaydate, setdisplaydate] = useState("");
  const [dropdown, setdropdown] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const name = localStorage.getItem("username");
      var date = new Date();
      var month = date.getMonth() + 1;
      month = month < 10 ? "0" + month : "" + month;
      var datee = date.getDate();
      datee = datee < 10 ? "0" + datee : "" + datee;
      var formatedDate = `${date.getFullYear()}-${month}-${datee}`;
      setLeaveDate(formatedDate);
      const res = await axiosInstance
        .post("/rdfdata", {
          recruiter: name,
          date: formatedDate,
        })
        .then((response) => {
          console.log(response.data);
          setrecords(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchOrder();
  }, []);

  useEffect(() => {
    var date = new Date();
    var dateno = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var dateString = dateno + " " + MONTHS[month] + ", " + year;
    setToday(dateString);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const name = localStorage.getItem("username");
      console.log("name", name);
      const res = await axiosInstance
        .post("/recruiterdata", {
          name: name,
        })
        .then((response) => {
          console.log("hiyy", response.data);
          setdropdown(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);


  const handleDateChange = async (date) => {
    setdisplaydate(date);
    const name = localStorage.getItem("username");
    var dateno = new Date(date).getDate();
    var month = new Date(date).getMonth();
    var year = new Date(date).getFullYear();
    var dateString = dateno + " " + MONTHS[month] + ", " + year;
    var monthn = date.getMonth() + 1;
    monthn = monthn < 10 ? "0" + monthn : "" + monthn;
    var datee = date.getDate();
    datee = datee < 10 ? "0" + datee : "" + datee;
    var formatedDate = `${date.getFullYear()}-${monthn}-${datee}`;
    setpassdate(date);
    setDate(dateString);
    setLeaveDate(formatedDate);
    axiosInstance
      .post("/rdfdata", {
        recruiter: name,
        date: formatedDate,
      })
      .then((response) => {
        setrecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const leavechange = async () => {
    setDisable(!disable);
    axiosInstance
      .put("/rdfleave", {
        leave: disable,
        date: leaveDate,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="home">
      <SidebarSL />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="allocated" />
          <Widget type="owner" />
          <Widget type="sourcing" />
        </div>
        <div className="jd-container">
            <JDDropdown records={dropdown} />
          </div>
        <h2 className="center-text">Hey! Please Fill Today's RDF By 6 PM</h2>
        <div className="listContainer3">
          <div className="listTitle">
          <div className="titleContainer">
              <div className="listTitle" style={{ marginRight: "20%" }}>
                <DatePicker
                  format="dd/MM/yyyy"
                  style={{
                    borderRadius: "5px",
                    marginBottom: "10px",
                    marginRight: "10px",
                    width: "100%",
                    border: "1px solid gray",
                  }}
                  className="filteroptions"
                  type="date"
                  value={displaydate}
                  onChange={handleDateChange}
                />
              </div>
              <h4 className="date-center-display">
                Date Selected:
                {date === "" ? today : date}
              </h4>
              <div className="listTitle" style={{ marginLeft: "10%" }}>
                <button
                  style={{
                    backgroundColor: "#6439ff",
                    border: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                  onClick={leavechange}
                >
                  On Leave
                </button>
              </div>
          </div>
          <TableRecruiter 
            disable={disable}
            records={records}
            date={passdate}
          />
        </div>
      </div>
    </div></div>
    </>
  )
}

export default DashboardRecruiter