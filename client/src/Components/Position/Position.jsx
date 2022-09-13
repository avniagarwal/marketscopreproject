import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      Name: "Avni",
      Recruiter: true,
      Sourcing: false
    },
    {
      Name: "Hitesh",
      Recruiter: false,
      Sourcing: true
    }
  ];
  return (
    <div className="table-group">
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header1">Name</TableCell>
            <TableCell className="table-header1">Recruiter</TableCell>
            <TableCell className="table-header1">Sourcing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell className="tableCell">{row.Name}</TableCell>
              <TableCell className="tableCell">
                <select >
                    <option>Yes</option>
                    <option>No</option>
                </select>
              </TableCell>
              <TableCell className="tableCell">
                <select >
                    <option>Yes</option>
                    <option>No</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default List;