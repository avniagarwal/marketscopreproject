import "./TableTwo.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api";

const TableTwo = (name) => {
  const rows = [
    {
      Company: "Hipi",
      Profile: "Product Manager",
      ID: "59"
    },
    {
      Company: "Newgen",
      Profile: "Python Developer",
      ID: "32"
    },
    {
      Company: "Celonis",
      Profile: "HRBP",
      ID: "165"
    },
    {
      Company: "Hipi",
      Profile: "Company Operation",
      ID: "104"
    }
  ];
  const data = name;
  const [records, setrecords] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      const name = localStorage.getItem("username");
      var date = new Date();
      var month = date.getMonth() + 1;
      month = month < 10 ? "0" + month : "" + month;
      var datee = date.getDate();
      datee = datee < 10 ? "0" + datee : "" + datee;
      var formatedDate = `${date.getFullYear()}-${month}-${datee}`;
      const res = await axiosInstance
        .post("/rdfdata", {
          recruiter: data.name,
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

  return (
    <div className="table-group">
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
        <TableRow style={{backgroundColor: "black"}}>
                <TableCell className="table-header">Ownership</TableCell>
            </TableRow>
            <TableRow style={{backgroundColor: "black"}}>
                <TableCell className="table-header">PID</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>{console.log("hey",records)}
          {records.map((row) => (
            <TableRow key={row.ID}>
              <TableCell className="tableCell">{row.pid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: "black"}}>
              <TableCell className="table-header">Sourcing</TableCell>
          </TableRow>
          <TableRow style={{backgroundColor: "black"}}>
              <TableCell className="table-header">PID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{console.log("hey",records)}
          {records.map((row) => (
            <TableRow key={row.ID}>
              <TableCell className="tableCell">{row.pid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TableTwo;