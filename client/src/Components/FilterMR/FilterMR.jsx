import React, { useState } from 'react'
import './FilterMR.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Input } from '@mui/material';
import DatePicker from 'react-date-picker'
import { axiosInstance } from '../../api';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Search from "../../Components/Search/Search";

const FilterMR = () => {
  const [records, setrecords] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recruiter, setRecruiter] = useState('');
  const [company, setCompany] = useState('');

  const handleStartDateChange = async (date) =>{
    setStartDate(date)
  }  
  const handleEndDateChange = async (date) =>{
    setEndDate(date)
  }  
  const handleRecruiter = async (event) =>{
    setRecruiter(event.target.value);
  }
  const handleCompany = async (event) =>{
    setCompany(event.target.value);
  }
  const handleSubmit = async () =>{
    if(startDate==='' || endDate===''){
      alert('Please select a date range');
    }
      var monthn = startDate.getMonth() + 1;
      monthn = monthn < 10 ? '0' + monthn : '' + monthn;
      var datee = startDate.getDate();
      datee = datee < 10 ? '0' + datee : '' + datee;
      var formatedDateStart = `${startDate.getFullYear()}-${monthn}-${datee}`
      var monthn = endDate.getMonth() + 1;
      monthn = monthn < 10 ? '0' + monthn : '' + monthn;
      var datee = endDate.getDate();
      datee = datee < 10 ? '0' + datee : '' + datee;
      var formatedDateEnd = `${endDate.getFullYear()}-${monthn}-${datee}`
      if(recruiter !=='' && company !== ''){
      axiosInstance.post("/MRfilter", {
        recruiter: recruiter,
        startDate: formatedDateStart,
        endDate: formatedDateEnd,
        company: company
      })
      .then((response) => {
        console.log(response.data);
        setrecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if(recruiter ==='' && company === ''){
      axiosInstance.post("/MRfilter", {
        startDate: formatedDateStart,
        endDate: formatedDateEnd
      })
      .then((response) => {
        console.log(response.data);
        setrecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if(recruiter !==''){
      axiosInstance.post("/MRfilter", {
        recruiter: recruiter,
        startDate: formatedDateStart,
        endDate: formatedDateEnd
      })
      .then((response) => {
        console.log(response.data);
        setrecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if(company !== ''){
      axiosInstance.post("/MRfilter", {
        startDate: formatedDateStart,
        endDate: formatedDateEnd,
        company: company
      })
      .then((response) => {
        console.log(response.data);
        setrecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } 
  }
  const reset = async () =>{
    setRecruiter('');
    setCompany('');
    setStartDate('');
    setEndDate('');
  }
  return (
    <>
    <div const="filterContainer">
      <button className="filter" onClick={reset}
      style={{marginBottom: '30px', marginLeft: '20px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#6439ff', border:'none', borderRadius: '10px', color: 'white'}}>
      Reset</button>
      <div className="f1" style={{marginTop: '10px'}}>
      <p className="f1-head" style={{fontSize: '15px', color: 'gray'}}>Recruiters</p>
      <input value={recruiter} style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', border:'1px solid gray'}} 
      className="filteroptions" placeholder="Recruiters" list="recruiter" onChange={handleRecruiter}/>
      <datalist id="recruiter">
        <option value="Namita Mehra">Namita Mehra</option>
        <option value="Bhawna Dutta">Bhawna Dutta</option>
        <option value="Renu Pillai">Renu Pillai</option>
        <option value="Amit Kumar">Amit Kumar</option>
        <option value="Namrata Gogoi">Namrata Gogoi</option>
      </datalist>
      <label  style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', fontSize: '15px', color: 'gray'}}>Start Date: </label>
      <DatePicker format="dd/MM/yyyy"  
              style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', width: "100%", border:'1px solid gray'}} 
              className="filteroptions" 
              type="date"
              value = {startDate}
              onChange={handleStartDateChange}
              />
      <label style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', fontSize: '15px', color: 'gray'}}>End Date: </label>
      <DatePicker format="dd/MM/yyyy"  
              style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', width: "100%", border:'1px solid gray'}} 
              className="filteroptions" 
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              />
      </div>
      <div className="f1" style={{fontSize: '15px', color: 'gray'}}>
      <p className="f1-head">Company</p>
      <input value={company} onChange={handleCompany} style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', border:'1px solid gray'}} className="filteroptions" placeholder="Company Name" list="company" />
      <datalist id="company">
        <option>Newgen</option>
        <option>HIPI</option>
      </datalist>
      <input  style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', border:'1px solid gray'}} className="filteroptions" placeholder="SPOC" list="spoc" />
      <datalist id="spoc">
        <option>Satish</option>
        <option>Renu</option>
      </datalist>
      {/* <input  style={{borderRadius: '5px', marginBottom: '10px', marginRight: '10px', height: '25px', border:'1px solid gray'}} className="filteroptions" placeholder="Functional Area" list="fa" />
      <datalist id="fa">
        <option>Marketing</option>
        <option>Backend Development</option>
      </datalist> */}
      <button className="filter" 
        style={{marginBottom: '30px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#6439ff', border:'none', borderRadius: '10px', color: 'white'}}
        onClick={handleSubmit}>Show Data</button>
    </div>
    </div>
    <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-header">Recruiter</TableCell>
                  <TableCell className="table-header">Profile ID</TableCell>
                  <TableCell className="table-header">CV Sent</TableCell>
                  <TableCell className="table-header">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((row) => (
                  <TableRow style={{ backgroundColor: row.Color}} key={row.ID}>
                    <TableCell className="table-data">{row.recruiter_name}</TableCell>
                    <TableCell className="table-data">{row.master_id}</TableCell>
                    <TableCell className="table-data">{row.CVSent}</TableCell>
                    <TableCell className="table-data">{row.Candidates}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </>
  )
}

export default FilterMR