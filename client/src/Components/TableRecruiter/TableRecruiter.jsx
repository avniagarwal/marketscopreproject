import "./TableRecruiter.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Search from "../../Components/Search/Search";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api";

const TableRecruiter = ({disable, records, date}) => {
  const state = disable;
  const rows = records;
  const datee = date;
  const today = new Date();
  const datediff = ((today.getTime()-datee.getTime())/(1000 * 3600 * 24))
  const [error, seterror] = useState(false);
  const [inputFields, setInputFields] = useState(records);

  useEffect(() => {
    console.log("inputs", records)
  }, [])
  const handleChange = (index, evnt)=>{

    let list = [...inputFields];
    list[index][evnt.target.name] = evnt.target.value
    setInputFields(list);
    
    }

  const rdfupdate = async () => {
    console.log(inputFields)
      (inputFields.forEach(async (inputFields) => {
        console.log(inputFields)
        if(inputFields.cvsourced === "" || inputFields.cvsent === "" || inputFields.candidates === ""){
          seterror(!error)
        }else{
        try {
          const result = await axiosInstance.post('/rdfupdate',{
            CVSourced: inputFields.cvsourced,
            CVSent: inputFields.cvsent,
            Candidates: inputFields.candidates,
            profileid: inputFields.pid
          });
          console.log(result);
        } catch (error) {
          console.log(error);
        }}}))
    
    
  }

  return (
    <>
{console.log("hi",inputFields)}
      {state === true 
       ?  <TableContainer component={Paper} className="table-disable">
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header table-disable">P ID</TableCell>
            <TableCell className="table-header table-disable">Nature</TableCell>
            <TableCell className="table-header table-disable">CV Sourced</TableCell>
            <TableCell className="table-header table-disable">CV Sent</TableCell>
            <TableCell className="table-header table-disable">Candidates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {}
          {rows.map((row, index) => (
            <TableRow>
              <TableCell className="table-disable" style={{color: 'rgb(183, 183, 183)'}}>{row.pid}</TableCell>
              <TableCell className="table-disable" style={{color: 'rgb(183, 183, 183)'}}>{row.Nature}</TableCell>
              <TableCell className="table-disable" style={{color: 'rgb(183, 183, 183)'}}>{row.CVSourced}</TableCell>
              <TableCell className="table-disable" style={{color: 'rgb(183, 183, 183)'}}>{row.CVSent}</TableCell>
              <TableCell className="table-disable" style={{color: 'rgb(183, 183, 183)'}}>{row.Candidates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       :  <TableContainer component={Paper} className="table">
       <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header">P ID</TableCell>
            <TableCell className="table-header">Nature</TableCell>
            <TableCell className="table-header">CV Sourced</TableCell>
            <TableCell className="table-header">CV Sent</TableCell>
            <TableCell className="table-header">Candidates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datediff > 3
            ?
            rows.map((row, index) => (
              <TableRow key={row.master_id}>
                <TableCell className="">{row.pid}</TableCell>
                <TableCell className="">{row.Nature}</TableCell>
                <TableCell className="">{row.CVSourced}</TableCell>
                <TableCell className="">{row.CVSent}</TableCell>
                <TableCell className="">{row.Candidates}</TableCell>
              </TableRow>
            ))
            :<>
            {rows.map((row, index) => (
              <TableRow key={index} className={error ? "red-bg" : "white-bg"}>
                <TableCell className="">{row.pid}</TableCell>
                <TableCell className="">{row.Nature}</TableCell>
                <TableCell className="">
                  <input defaultValue={row.CVSourced} onChange={(event) => handleChange(index, event)} name="cvsourced"/>
                </TableCell>
                <TableCell className="">
                  <input required  defaultValue={row.CVSent} onChange={(event) => handleChange(index, event)} name="cvsent"/>
                </TableCell>
                <TableCell className="">
                <input defaultValue={row.Candidates} onChange={(event) => handleChange(index, event)} name="candidates"/>
                </TableCell>
              </TableRow>
            ))}
            {rows.length > 0 
            ? 
            <button className="btn btn-outline-primary" style={{marginLeft: '50%'}} onClick={rdfupdate}>
              Update
            </button> 
            : 
            null}</>
          }  
        </TableBody>
      </Table>
    </TableContainer>
    }
      
    </>
  );
};

export default TableRecruiter;