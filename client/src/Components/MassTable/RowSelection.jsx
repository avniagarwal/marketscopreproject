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
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import "./RowSelection.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import Checkbox from "./Checkbox";
import { width } from "@mui/system";

const RowSelection = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [SPOC ,setSPOC] = useState(""); 
  const [selectedSPOC, setselectedSPOC] = useState("");
  const [selectedPriority, setselectedPriority] = useState("");
  const [SPOClist, setSPOClist] = useState([]);

  const getEmployees = () => {
    axios.get("http://localhost:3001/priority").then((response) => {
      setEmployeeList(response.data);
      console.log(response);
      console.log("successfull in getting data");
    });
  };

  React.useEffect(() => {
    console.log(employeeList);
    console.log(data);
    getEmployees();
    getSPOC();
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
        width: 180,
      },
      {
        Header: "SPOC",
        accessor: "SPOC",
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
    ],
    []
  );


  
  // getting the list of the Name Of Company from Company table
  const getSPOC = () => {
    axios.get("http://localhost:3001/SPOC").then((response) => {
      setSPOClist(response.data);
      console.log(response);
      console.log("successfull in getting SPOC names data");
    });
  };

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
    //window.location.reload();
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

        <div className="frmRR">
          <label htmlFor="posC">Change SPOC:</label>
          <select
            name="company"
            id="posM"
            onChange={(event) => {
              setselectedSPOC(event.target.value);
            }}
          >
            <option value="" disabled selected id="gr">
                  Select option
                </option>
                {SPOClist.map((val, key) => {
                  // if (val.NameofCompany == NameofCompany)
                    return <option value={val.SPOC}>{val.SPOC}</option>;
                })}
          </select>
        </div>

        <div className="frmc">
          <label htmlFor="posc">
            <button
              className="bttnscv"
              id="svngc1"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you wish to Update SPOC of selected rows"
                  )
                )
                  updateSPOC();
              }}
            >
              Update
            </button>
          </label>
        </div>

        <div className="frmRR">
          <label htmlFor="posC">Change Priority:</label>
          <select
            name="company"
            id="posM"
            onChange={(event) => {
              setselectedPriority(event.target.value);
            }}
          >
            <option value="" disabled selected>
              Select option
            </option>
            <option value="High Priority">High Priority</option>
            <option value="Feedback Pending">Feedback Pending</option>
            <option value="Moderate">Moderate</option>
            <option value="Hold">Hold</option>
          </select>
        </div>

        <div className="frmc">
          <label htmlFor="posc">
            <button
              className="bttnscv"
              id="svngc1"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you wish to Update Priority of selected rows"
                  )
                )
                  updatePriority();
              }}
            >
              Update
            </button>
          </label>
        </div>
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