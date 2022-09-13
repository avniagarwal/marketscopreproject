import SidebarRecruiter from "../../Components/SidebarRecruiter/SidebarRecruiter";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import "./ChangePriority.scss";
import DatePicker from 'react-date-picker'
import BasicTable from "../../Components/MassTable/BasicTable";
import SortedTable from "../../Components/MassTable/SortingTable";
import FilteringTable from "../../Components/MassTable/FilteringTable";
import PaginationTable from "../../Components/MassTable/PaginationTable";
import RowSelection from "../../Components/MassTable/RowSelection";

import Search from "../../Components/Search/Search";
import JDDropdown from "../../Components/JDDropdown/JDDropdown";
import { useState } from "react";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ChangePriority = () => {
  const [date, setDate] = useState('');

  const handler = (event) => {
    const value = event.target.value
    setDate(value)
  }

  const rows = [
    {
      client: "Newgen",
      industry: "IT",
      functionalArea: "Technology"
    },
    {
      client: "Hippi",
      industry: "",
      functionalArea: ""
    },{
      client: "BirlaSoft",
      industry: "",
      functionalArea: ""
    },{
      client: "NIIT",
      industry: "",
      functionalArea: ""
    },
  ];
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        
        <div className="listContainer3">
        <div className="Client-Form " >Change Priority</div>
      
        <hr />
        <br />
          {/* <div className="titleContainer">
            <div className="listTitle">
            <input  
              style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', border:'1px solid gray'}} 
              className="filteroptions" 
              type="date"
              onChange={handler}
              />
            </div>
            <p className="date-center-display">Date Selected: {date}</p>
            <div className="listTitle">
              <button style={{backgroundColor: '#6439ff', border:'none', padding: '10px', borderRadius: '10px', color: 'white'}}>On Leave</button>
            </div>
          </div> */}
          <RowSelection />
        </div>
      </div>
    </div>
    </>
  )
}

export default ChangePriority;