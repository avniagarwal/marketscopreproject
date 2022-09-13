import React from 'react'
import { useState } from 'react'
import './JD.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const ReadMore = ({ data }) => {
  const text = data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <p className="text">
      {text.slice(0, 30)}<br></br>
      <div className="link" onClick={handleShow} style={{cursor: 'pointer', color: 'blue'}}>more...</div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Extra Notes</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
        </Modal>
    </p>
  );
};

const JDDropdown = (records) => {
    
    const data = records

    const [option, setOption] = useState(data.records[0]);

    const handleChange = event => {
        console.log(event.target.value);
        setOption(event.target.value);
      };

  return (
    <div className="jd-tab">{console.log()}
          <div className="jdcontainer">
              <select className="jd-select" value={option} onChange={handleChange}>
              {data.records.map(option => (
              <option key={option.id} value={option.id}>
                  {option.NameofCompany+"; "+option.category+"; ID"+option.id+"; "+option.Priority}
              </option>
              ))}
          </select>
        </div>
        <br/>
      <TableContainer style={{maxWidth: '84rem'}} component={Paper} className="table">
        <Table style={{}} >
          <TableHead>
            <TableRow>
              <TableCell className="jd-table table-header">PID</TableCell>
              <TableCell className="jd-table table-header">Business Term</TableCell>
              <TableCell className="jd-table table-header">Priority</TableCell>
              <TableCell className="jd-table table-header">MS Rep</TableCell>
              <TableCell className="jd-table table-header">Educational Background</TableCell>
              <TableCell className="jd-table table-header">Target Company</TableCell>
              <TableCell className="jd-table table-header">Skills</TableCell>
              <TableCell className="jd-table table-header">Experience</TableCell>
              <TableCell className="jd-table table-header">Location</TableCell>
              <TableCell className="jd-table table-header">Salary</TableCell>
              <TableCell className="jd-table table-header">Functional Area</TableCell>
              <TableCell className="jd-table table-header">Sub Functional Area</TableCell>
              <TableCell className="jd-table table-header">Extra Notes</TableCell>
              <TableCell className="jd-table table-header">JD Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.records.filter(row => row.id == option).map((row) => (
              <TableRow key={row.id}>
                <TableCell className="jd-table" style={{minWidth: '5rem'}}>{row.id}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.BusinessTerm}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '5rem'}}>{row.Priority}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.MSrep}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.EdReq}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.TargetComp}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{(row.Skill1!=="null")
                                                    ? row.Skill1 + " "
                                                    +(row.Skill2!=="null")
                                                    ? row.Skill2 + " " : ""
                                                     : ""
                                                  +(row.Skill3!=="null")
                                                    ? row.Skill3 + " " : ""
                                                  +(row.Skill4!=="null")
                                                    ? row.Skill4 + " " : ""
                                                  +(row.Skill5!=="null")
                                                    ? row.Skill5 + " " : ""}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{(row.LowExperience===row.HighExperience)
                                                  ? row.LowExperience + " Years"
                                                  : row.LowExperience + " - " + row.HighExperience + " Years"}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{(row.IndiaAbroad==="India")?(row.State+"("+row.SubLocation+")"):(row.Country+"("+row.SubLocation+")")}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.currency+" "+row.lowSalary+"-"+row.highSalary+" "+row.lakhK}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.FunctionalArea}</TableCell>
                <TableCell className="jd-table" style={{minWidth: '10rem'}}>{row.SubFunctionalArea}</TableCell>
                <TableCell className="jd-table">{(row.ExNot.length > 30)?<ReadMore data={row.ExNot}/>
                                                                        :<>{row.ExNot}</>}
                                                                        </TableCell>
                <TableCell className="jd-table" style={{maxWidth: '10rem', overflow: 'scroll', overflowY: 'hidden'}}><a href={row.LinkJD} target="_blank">{row.LinkJD}</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default JDDropdown