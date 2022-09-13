import React, { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import "./table.css";
import "./RowSelection.css"
import ColumnFilter from "./ColumnFilter";
import Checkbox from "./Checkbox";
import { width } from "@mui/system";

const RowSelection = () => {

  const [employeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();

  const getCompany = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      setEmployeeList(response.data);
      console.log(response);
      console.log("successfull in getting data");
    });
  };

  React.useEffect(()=>{
    console.log(employeeList);
    console.log(data);
    getCompany();
  }, [])

  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
     
    },
    {
      Header: 'User Name',
      accessor: 'username',
      width: 180
     
    },
    {
      Header: 'Email Id',
      accessor:'email',
     
    },
    {
      Header: 'Password',
      accessor:'password',
     
    },
    {
      Header: 'Position',
      accessor:'position',
     
    },
  ],[]);

  const data = employeeList;

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
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, pageSize } = state;

  const { globalFilter } = state;

  return (
    <>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div id="srchM">{column.canFilter ? column.render("Filter") : null }</div>
                  
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button onClick={() =>navigate("/addemployee")}>Add Employee</button>
      </div>

      {/* Important */}

      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre> */}

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
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage} id="rs">
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
      </div>
    </>
  );
};

export default RowSelection;
