import React from 'react'
import { axiosInstance } from '../../api'
import Navbar from '../../Components/Navbar/Navbar'
import SidebarTL from '../../Components/SidebarTL/SidebarTL'
import List from '../../Components/Table/Table'
import { useEffect, useState } from "react";

const FirePositions = () => {
  const [visible, setVisible] = useState(false)
  const [rows, setrows] = useState([]);
  const [selected, setselected] = useState('')

  const handleNewTask = async () => {
    setVisible(!visible)
  }

  useEffect(()=> {
    const fetchData = async () =>{
      
      const res = await axiosInstance.post("/tldata")
        .then((response) => {
          console.log(response.data);
          setrows(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  fetchData();
  }, []);

   const addTask = async () => {
    const res = await axiosInstance.post("/addfireposition", {
              id: selected
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
    window.location.reload();
  }

  
  return (
    <div>
    <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        <h1 style={{ marginTop: '10px' }} className="center-text">Fire Positions</h1>
        <div className="listContainer3">
        <div className="btn btn-outline-success " onClick={handleNewTask}>Add New</div>
        
            {visible && <div style={{paddingLeft: '2rem', fontSize: '1.2rem'}} classname="p-5 d-inline-block">
            <h5 className="text-center pt-1 text-muted">Please Select the position you want to add to fire positions</h5>
                   <label style={{padding: '2rem', marginLeft: '21rem'}}>PID: </label>
                     <select  onChange={(e)=>{setselected(e.target.value)}}>
                       {rows.map((row) => (
                         <option value={row.id}>
                         {row.NameofCompany+"; "+row.category+"; ID "+row.id+"; "+row.Priority}
                         </option>
                       ))}
                     </select>
                   <button className="btn btn-outline-primary align-center" style={{marginLeft: '7rem'}} onClick={addTask}>Submit</button>
                   
                 </div>}
        <List />
        </div>
        </div>
        </div>
    </div>
  )
}

export default FirePositions