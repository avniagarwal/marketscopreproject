import SidebarTL from "../../Components/SidebarTL/SidebarTL";
import Navbar from "../../Components/Navbar/Navbar";
import "./DashboardTL.scss";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/FireTable";
import TableTwo from "../../Components/TableTwo/TableTwo"
import { useEffect } from "react";
import { axiosInstance } from "../../api";
import { useState } from "react";
import JDDropdown from "../../Components/JDDropdown/JDDropdown";

const DashboardTL = () => {
  const [dropdown, setdropdown] = useState([]);
  const [names, setNames] = useState([]);
  const [newtaskrecruiter, setNewTaskrecruiter] = useState('');
  useEffect(() =>{
    const fetchOrder = async () =>{
        const res = await axiosInstance.post("/newtaskname")
          .then((response) => {
            console.log("hi",response.data[0].username);
            setNames(response.data);
            setNewTaskrecruiter(response.data[0].username)
          })
          .catch((error) => {
            console.log(error);
          });
    }
    fetchOrder();
},[] );

  useEffect(()=> {
    const fetchData = async () =>{
      const name = localStorage.getItem("username")
      console.log("name",name)
      const res = await axiosInstance.post("/tldata", {
          name: name,
        })
        .then((response) => {
          console.log(response.data);
          setdropdown(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  fetchData();
  }, []);

  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="active"/>
          <Widget type="allocated"/>
          <Widget type="fire"/>
        </div>
        <div className="jd-container">
          <JDDropdown records={dropdown}/>
        </div>
        <div className="listContainerTop">
        <div className="listContainer">
          <div className="listTitle">Fire Positions</div>
          <Table />
        </div>
        <div className="listContainer2">
                   <select className='listTitle' id="recruiter" onChange={(e)=> setNewTaskrecruiter(e.target.value)}>
                     {names.map((row) => (
                       <option value={row.username}>{row.username}</option>
                     ))}
                   </select>
          <TableTwo name={newtaskrecruiter}/>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardTL