import "./TableMass.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Search from "../../../../my-app/src/components/Search/Search";

const TableRecruiter = () => {
  const rows = [
    {
      PID: "ID 36",
      Nature: "Source",
      CVSourced: "4",
      CVSent: "2",
      PipeLine: "S"
    },
    {
        PID: "ID 35",
        Nature: "Source",
        CVSourced: "4",
        CVSent: "2",
        PipeLine: "S"
    },
    {
        PID: "ID 37",
        Nature: "Source",
        CVSourced: "4",
        CVSent: "2",
        PipeLine: "S"
    },
    {
        PID: "ID 38",
        Nature: "Owner",
        CVSourced: "4",
        CVSent: "2",
        PipeLine: "S"
    }
  ];
  return (
    <>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="">P ID</TableCell>
            <TableCell className="">Nature</TableCell>
            <TableCell className="">CV Sourced</TableCell>
            <TableCell className="">CV Sent</TableCell>
            <TableCell className="">Pipeline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID}>
              <TableCell className="">{row.PID}</TableCell>
              <TableCell className="">{row.Nature}</TableCell>
              <TableCell className="">{row.CVSourced}</TableCell>
              <TableCell className="">{row.CVSent}</TableCell>
              <TableCell className="">{row.PipeLine}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default TableRecruiter;