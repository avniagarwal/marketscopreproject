// import SidebarTL from "../../Components/SidebarTL/SidebarTL";
// import Navbar from "../../Components/Navbar/Navbar";
// import "./Tasksheet.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import { useEffect, useState } from "react";
// import { axiosInstance } from '../../api';
// import Select from 'react-select';

// const TasksheetTL = () => {
// const [recruiter, setRecruiter] = useState('');
// const [pid, setPid] = useState('');
// const [naturee, setNature] = useState('');
// const [visible, setVisible] = useState(false)
// const [rows, setRows] = useState([])
// const [newtaskrecruiter, setNewTaskrecruiter] = useState('');
// const [newtaskpid, setnewtaskpid] = useState('');
// const [newtasknature, setnewtasknature] = useState('');
// const [selectedName, setSelectedName] = useState(null);
// const [recruiterOptions, setRecruiterOptions] = useState([]);
//   useEffect(() =>{
//     const fetchOrder = async () =>{
//         const res = await axiosInstance.get("/tasksheet")
//           .then((response) => {
//             console.log(response.data);
//             setRows(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//     }
//     fetchOrder();
// },[] );

// useEffect(() =>{
//   const fetchOrder = async () =>{
//       const res = await axiosInstance.get("/recruiteroptions")
//         .then((response) => {
//           console.log(response.data);
//           setRecruiterOptions(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//   }
//   fetchOrder();
// },[] );

//   const nature=[
//     {value: "Sourcing"}, {value:  "Calling"}, {value:  "Owner"}, {value: "Sourcing + Calling"}
//   ]

//   const handlerecruiterFilter = async (event) =>{
//     const data = event.target.value
//     setRecruiter(data);
    
//   }
//   const handlepidFilter = async (event) =>{
//     const data = event.target.value
//     setPid(data);
//   }
//   const handlenatureFilter = async (event) =>{
//     const data = event.target.value
//     setNature(data);
//   }

//   const newtaskrecruiterChange = async (event) =>{
//     const data = event.target.value
//     setNewTaskrecruiter(data);
//   }

//   const newtaskpidChange = async (event) =>{
//     const data = event.target.value
//     setnewtaskpid(data);
//   }

//   const newtasknatureChange = async (event) =>{
//     const data = event.target.value
//     setnewtasknature(data);

//   }
// const removeInputFields = (index,e) => {
//   setRows(rows.filter((v, i) => i !== index));
// }
// const handleNewTask = async () => {
//   setVisible(!visible)
// }

// const addTask = async () => {
//   const data={
//     recruiter: newtaskrecruiter,
//         pid: newtaskpid,
//         nature: newtasknature
//   }
//   setRows(rows.concat(data))
//   const res = await axiosInstance.post("/addtask", {
//         recruiter: newtaskrecruiter,
//         pid: newtaskpid,
//         nature: newtasknature
//           })
//           .then((response) => {
//             setRows(rows.concat(data))
//             console.log(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
// }

// const handleChangeName = e => {
//   setSelectedName(e);
// }
//   return (
//     <>
//       <div className="home">
//       <SidebarTL />
//       <div className="homeContainer">
//         <Navbar />
//         <h1 style={{ marginTop: '10px' }} className="center-text">Tasksheet</h1>
//         <div className="listContainer3">
//         <TableContainer component={Paper} className="table">
//           <div className="btn btn-outline-success " onClick={handleNewTask}>Add New</div>
          
//           <Table sx={{ minWidth: 100 }} aria-label="simple table">
          
//               <TableRow>
//                 <TableCell className="table-header">
//                   Recruiter<br/>
//                   <Select
//                     isMulti
//                     placeholder="Select Option"
//                     value={selectedName} // set selected value
//                     options={recruiterOptions} // set list of the data
//                     onChange={handleChangeName} // assign onChange function
//                   />
//                 </TableCell>
//                 <TableCell className="table-header" onChange={handlepidFilter}>
//                   P ID<br/>
//                   <select id="PID">
//                     {rows.map((row) => (
//                       <option>{row.pid}</option>
//                     ))}
//                   </select>
//                 </TableCell>
//                 <TableCell className="table-header">
//                   Nature<br/>
//                   <select id="nature">
//                     {nature.map((a) => (
//                         <option>
//                         {a.value}
//                         </option>
//                       ))}
//                   </select>
//                 </TableCell>
//                 <TableCell className="table-header"></TableCell>
//               </TableRow>
//               {visible && <TableRow style={{backgroundColor: '#af9df2'}}>
//                   <TableCell className="">
//                   <input type="text" onchange={newtaskrecruiterChange} placeholder="Recruiter Name" list="recruiter"/>
//                   <datalist id="recruiter">
//                     {rows.map((row) => (
//                       <option value={row.recruiter_name}>{row.recruiter_name}</option>
//                     ))}
//                   </datalist>
//                   </TableCell>
//                   <TableCell className="">
//                   <input type="text" style={{}} onchange={newtaskpidChange} placeholder="P ID" list="pid"/>
//                   <datalist id="pid">
//                     {rows.map((row) => (
//                       <option>{row.pid}</option>
//                     ))}
//                   </datalist>
//                   </TableCell>
//                   <TableCell className="">
//                     <select id="nature" onchange={newtasknatureChange}>
//                       {nature.map((a) => (
//                         <option>
//                         {a.value}
//                         </option>
//                       ))}
//                     </select>
//                   </TableCell>
//                   <TableCell className="">
//                   <button className="btn btn-outline-primary" onClick={addTask}>Submit</button>
//                   </TableCell>
//                 </TableRow>}
//             <TableBody>
//               {rows.filter(row => row.recruiter_name === recruiter)
//                 .filter(row => row.pid === pid)
//                 .map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell className="">{row.recruiter_name}</TableCell>
//                   <TableCell className="">{row.pid}</TableCell>
//                   <TableCell className="">
//                     <select id="nature" value={row.Nature}>
//                       {nature.map((a) => (
//                         <option>
//                         {a.value}
//                         </option>
//                       ))}
//                     </select>
//                   </TableCell>
//                   <TableCell className="">
//                   <button className="btn btn-outline-danger" onClick={e => removeInputFields(index,e)}>x</button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default TasksheetTL

import React, { useMemo} from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";
import { useEffect, useState } from "react";
import { axiosInstance } from '../../api';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import "./table.css";
import "./RowSelection.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ColumnFilter from "./ColumnFilter";
import Checkbox from "./Checkbox";
import { width } from "@mui/system";

const TasksheetTL = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [recruiter, setRecruiter] = useState('');
  const [pid, setPid] = useState('');
  const [naturee, setNature] = useState('');
  const [visible, setVisible] = useState(false)
  const [rows, setRows] = useState([])
  const [newtaskrecruiter, setNewTaskrecruiter] = useState('');
  const [newtaskpid, setnewtaskpid] = useState('');
  const [newtasknature, setnewtasknature] = useState('Sourcing');
  const [show, setShow] = useState(false);
  const [names, setNames] = useState([]);
  const [pids, setPids] = useState([]);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() =>{
      const fetchOrder = async () =>{
          const res = await axiosInstance.get("/tasksheet")
            .then((response) => {
              console.log(response.data);
              setRows(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
      }
      fetchOrder();
  },[] );

  useEffect(() =>{
    const fetchOrder = async () =>{
        const res = await axiosInstance.post("/newtaskname")
          .then((response) => {
            console.log(response.data);
            setNames(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    fetchOrder();
},[] );

useEffect(() =>{
  const fetchOrder = async () =>{
      const res = await axiosInstance.post("/activeprofilesdata")
        .then((response) => {
          console.log(response.data);
          setPids(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  fetchOrder();
},[] );


  const nature=[
    {value: "Sourcing"}, {value:  "Calling"}, {value:  "Owner"}, {value: "Sourcing + Calling"}
  ]

  const newtasknatureChange = async (event) =>{
    const data = event.target.value
    setnewtasknature(data);

  }

  const handleNewTask = async () => {
    setVisible(!visible)
  }
  
  const addTask = async () => {
    console.log(newtaskrecruiter,', ', newtaskpid,', ', newtasknature)
    const res = await axiosInstance.post("/addtask", {
          recruiter: newtaskrecruiter,
          pid: newtaskpid,
          nature: newtasknature
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
    window.location.reload();
  }

  const deleteTask = () => {
    {JSON.stringify(selectedFlatRows.forEach(async (id) => {
      const datas = id.original
      try {
        const result = await axiosInstance.post('/deletetask',{
          recruiter_name: datas.recruiter_name,
          master_id: datas.master_id
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }))}
    window.location.reload();
  }; 

  const columns = useMemo(
    () => [
      {
        Header: "Recruiter",
        accessor: "recruiter_name",
      },
      {
        Header: "PID",
        accessor: "pid"
      },
      {
        Header: "Nature",
        accessor: "Nature",
      },
    ],
    []
  );

  const data = rows;

  

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageindex: 1 },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]});
    }
  );

  const { pageIndex, pageSize } = state;

  const { globalFilter } = state;

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <div>
        <div className="home">
          <SidebarTL />
          <div className="homeContainer">
            <Navbar />

            <h1 style={{ marginTop: "10px" }} className="center-text">
              Tasksheet
            </h1>
            <div className="listContainer3">
            <div className="btn btn-outline-success " onClick={handleNewTask}>Add New</div>
            {(selectedFlatRows===null) 
              ? ''
              : <div className="btn btn-outline-danger" onClick={handleShow}>Delete Task</div>}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>DELETE</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Do you want to delete the task?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>No</Button>
                    <Button variant="danger" onClick={deleteTask}>Yes</Button>
                  </Modal.Footer>
                </Modal>
            {visible && <div style={{paddingLeft: '2rem', fontSize: '1.2rem'}} classname="p-5 d-inline-block">
            <h5 className="text-center pt-1 text-muted">Please Enter New Task Details</h5>
                   <label style={{padding: '2rem'}}>Name: </label>
                   <input type="text" onChange={(e)=> setNewTaskrecruiter(e.target.value)} placeholder="Recruiter Name" list="recruiter"/>
                   <datalist id="recruiter">
                     {names.map((row) => (
                       <option value={row.username}>{row.username}</option>
                     ))}
                   </datalist>
                   <label style={{padding: '2rem'}}>PID: </label>
                   <input type="text" style={{}}  onChange={(e)=> setnewtaskpid(e.target.value)}  placeholder="P ID" list="pid"/>
                   <datalist id="pid">
                     {pids.map((option) => (
                       <option>{option.NameofCompany+"; "+option.category+"; ID"+option.id+"; "+option.Priority}</option>
                     ))}
                   </datalist>
                   <label style={{padding: '2rem'}}>Nature: </label>
                     <select id="nature" onChange={newtasknatureChange}>
                       {nature.map((a) => (
                         <option>
                         {a.value}
                         </option>
                       ))}
                     </select><br/>
                   <button className="btn btn-outline-primary align-center mb-3" style={{marginLeft: '37rem'}} onClick={addTask}>Submit</button>
                   
                 </div>}
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}

                          <div id="srchM">
                            {column.canFilter ? column.render("Filter") : null}
                          </div>
                          {/* <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span> */}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span>
                  | Go to page:{" "}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                    style={{ width: "50px" }}
                  />
                </span>{" "}
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50, 100, 125, 150, 200].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {"<<"}
                </button>{" "}
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  id="rs"
                >
                  Next
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksheetTL;