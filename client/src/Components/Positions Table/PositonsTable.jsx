import React, { useMemo, useState } from "react";
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
import "./RowSelection.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import Checkbox from "./Checkbox";
import { width } from "@mui/system";

const RowSelection = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const [selectedSPOC, setselectedSPOC] = useState("");
  const [selectedPriority, setselectedPriority] = useState("");

  const getEmployees = () => {
    axios.get("http://localhost:3001/employees2").then((response) => {
      setEmployeeList(response.data);
      console.log(response);
      console.log("successfull in getting data");
    });
  };

  React.useEffect(() => {
    console.log(employeeList);
    console.log(data);
    getEmployees();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Company",
        accessor: "NameofCompany",
      },
      {
        Header: "Business Term",
        accessor: "BusinessTerm",
       
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Priority",
        accessor: "Priority",
      },
      {
        Header: "No of Positions",
        accessor: "NOP",
      },
      {
        Header: "SPOC",
        accessor: "SPOC",
      },
      {
        Header: "Educational Requirements",
        accessor: "EdReq",
      },
      {
        Header: "Joining Time",
        accessor: "JoiningTime",
      },
      {
        Header: "Target Companies",
        accessor: "TargetComp",
      },
      {
        Header: "Skills",
        accessor: "Skills",
      },
      
      {
        Header: "MS Representative",
        accessor: "MSrep",
      },
      {
        Header: "Experience",
        accessor: "Experience",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Salary",
        accessor: "Salary",
      },
      
      {
        Header: "Functional Area",
        accessor: "FunctionalArea",
      },
      
      {
        Header: "SubFunctional Area",
        accessor: "SubFunctionalArea",
      },
      {
        Header: "Link JD",
        accessor: "LinkJD",
        maxWidth: 70,
        minWidth: 50,
        width: 10,
      },
      {
        Header: "Job Board Link",
        accessor: "JBlink",
      },
      {
        Header: "Extra Notes",
        accessor: "ExNot",
      },
      {
        Header: "Date and Time",
        accessor: "DateandTime",
      },
      {
        Header: "Who edited",
        accessor: "Whoedited",
      },
      
    ],
    []
  );

  const updateSPOC = () => {
    const spoc = selectedSPOC;
    console.log(spoc);
    {
      JSON.stringify(
        selectedFlatRows.forEach(async (id) => {
          const datas = id.original;
          console.log("The id is", id.original);
          try {
            axios.put("http://localhost:3001/updateS", {
              SPOC: spoc,
              id: datas.id,
            });
            // console.log(result);
          } catch (error) {
            console.log(error);
          }
        })
      );
    }
    window.location.reload();
  };

  const updatePriority = (e) => {
    const priority = selectedPriority;
    console.log(priority);
    {
      JSON.stringify(
        selectedFlatRows.forEach(async (id) => {
          const datas = id.original;
          console.log("The id is", id.original);
          try {
            axios.put("http://localhost:3001/updateP", {
              Priority: priority,
              id: datas.id,
            });
            // console.log(result);
          } catch (error) {
            console.log(error);
          }
        })
      );
    }
    window.location.reload();
  };

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
      <div className="men">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}

                  <div id="srchMR">
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

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
