import SidebarRecruiter from "../../Components/SidebarRecruiter/SidebarRecruiter";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import "./PositionsTable.scss";
import DatePicker from 'react-date-picker'
import BasicTable from "../../Components/MassTable/BasicTable";
import SortedTable from "../../Components/MassTable/SortingTable";
import FilteringTable from "../../Components/MassTable/FilteringTable";
import PaginationTable from "../../Components/MassTable/PaginationTable";
import PositionsTable from "../../Components/Positions Table/PositonsTable";

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
        <div className="Client-Form " >Active Positions</div>
      
        <hr />
        <br />
          <PositionsTable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChangePriority;