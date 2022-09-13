import SidebarTL from "../../Components/SidebarTL/SidebarTL";
import Navbar from "../../Components/Navbar/Navbar";
import "./MasterRecruiterForm.scss";

import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";

import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Search from "../../Components/Search/Search";
import FilterMR from "../../Components/FilterMR/FilterMR";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MasterRecruiterForm = () => {
  const [recruiter, useRecruiter] = useState("");
  const rows = [
    {
      Recruiter: "Abc",
      PID: "ID 22",
      CVSent: "2",
      PipeLine: "S",
      Name: "def",
      Color: "#B0C4DE",
    },
    {
      Recruiter: "Abc",
      PID: "ID 37",
      CVSent: "2",
      PipeLine: "S",
      Name: "def",
      Color: "#B0C4DE",
    },
    {
      Recruiter: "Abc",
      PID: "ID 38",
      CVSent: "2",
      PipeLine: "S",
      Name: "def",
      Color: "#B0C4DE",
    },
    {
      Recruiter: "DEF",
      PID: "ID 35",
      CVSent: "2",
      PipeLine: "S",
      Name: "def",
      Color: "#FFE4C4",
    },
  ];

  return (
    <>
      <div className="home">
        <SidebarTL />
        <div className="homeContainer">
          <Navbar />
          <h1 style={{ marginTop: "10px" }} className="center-text">
            Master Recruiter Form
          </h1>
          <div className="mastForm">
            <div className="form-option1">
              <FilterMR />
            </div>
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }} className="">
                      Recruiter
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} className="">
                      Profile ID
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} className="">
                      CV Sent
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} className="">
                      Pipeline
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} className="">
                      Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      style={{ backgroundColor: row.Color }}
                      key={row.ID}
                    >
                      <TableCell className="">{row.Recruiter}</TableCell>
                      <TableCell className="">{row.PID}</TableCell>
                      <TableCell className="">{row.CVSent}</TableCell>
                      <TableCell className="">{row.PipeLine}</TableCell>
                      <TableCell className="">{row.Name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={2}>
              <Pagination
                count={10}
                color="primary"
                variant="outlined"
                shape="rounded"
                style={{ marginLeft: "30%", marginTop: "1rem" }}
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterRecruiterForm;
