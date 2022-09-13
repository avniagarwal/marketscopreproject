import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { axiosInstance } from '../../api';


const Active = () => {
    const [activedata, setactivedata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/activeprofilesdata")
      .then((response) => {
        console.log(response.data);
        setactivedata(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);
  return (
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableBody>
          {activedata.map((option) => (
            <TableRow key={option.ID}>
              <TableCell className="">{option.NameofCompany+"; "+option.category+"; ID"+option.id+"; "+option.Priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

const Fire = () => {
    const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/firepositionsdata")
      .then((response) => {
        console.log(response.data);
        setdata(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);
    return (
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableBody>
            {data.map((option) => (
              <TableRow key={option.ID}>
                <TableCell className="">{option.NameofCompany+"; "+option.category+"; ID"+option.id+"; "+option.Priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    )
  }

const Allocated = () => {
    const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/firepositionsdata")
      .then((response) => {
        console.log(response.data);
        setdata(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);
return (
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableBody>
        {data.map((row) => (
            <TableRow key={row.ID}>
            <TableCell className="">{row.pid}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
)
}

const Sourcing = () => {
    const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post("/firepositionsdata")
      .then((response) => {
        console.log(response.data);
        setdata(response.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    fetchData();
  }, []);
    return (
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
            {data.map((row) => (
                <TableRow key={row.ID}>
                <TableCell className="">{row.CODE}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    )
    }
export {
    Active,
    Fire,
    Allocated,
    Sourcing
}