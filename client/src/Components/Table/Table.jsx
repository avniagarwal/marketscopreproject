import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { axiosInstance } from "../../api";
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const List = () => {
  const [rows, setrows] = useState([]);
  const [selected, setselected] = useState('')
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteTask =  (id) => {
    const result =  axiosInstance.post('/deletefireposition',{
      id: id
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
window.location.reload();
};

  useEffect(()=> {
    const fetchData = async () =>{
      
      const res = await axiosInstance.post("/firepositionsdata")
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

  return (
    <div className="table-group">
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header1">Company</TableCell>
            <TableCell className="table-header1">Profile</TableCell>
            <TableCell className="table-header1"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell className="tableCell">{row.NameofCompany}</TableCell>
              <TableCell className="tableCell">{row.NameofCompany+"; "+row.category+"; ID "+row.id+"; "+row.Priority}</TableCell>
              <TableCell className="tableCell"><div className="btn btn-outline-danger" onClick={handleShow}>Delete Task</div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>DELETE</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Do you want to remove the position from fire positions?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>No</Button>
                    <Button variant="danger" onClick={()=>deleteTask(row.id)}>Yes</Button>
                  </Modal.Footer>
                </Modal></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default List;