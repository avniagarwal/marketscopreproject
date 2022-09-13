import React, { useEffect, useMemo, useState } from "react";
import "./Edit.css";
import axios from "axios";
import Select from "react-select";
import { LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Edit = () => {
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedSate] = useState();
  const [cities, setCities] = useState([]);

  const [empId, setempId] = useState("");
  const [NameofCompany, setNameofCompany] = useState("");
  const [BusinessTerm, setBusinessTerm] = useState("");
  const [Priority, setPriority] = useState("");
  const [NOP, setNOP] = useState("");
  const [SPOC, setSPOC] = useState("");
  const [EdReq, setEdReq] = useState("");
  const [JoiningTime, setJoiningTime] = useState("");
  const [TargetComp, setTargetComp] = useState("");
  const [Skill1, setSkill1] = useState("");
  const [Skill2, setSkill2] = useState("");
  const [Skill3, setSkill3] = useState("");
  const [Skill4, setSkill4] = useState("");
  const [Skill5, setSkill5] = useState("");
  const [MSrep, setMSrep] = useState("");
  const [LowExperience, setLowExperience] = useState("");
  const [HighExperience, setHighExperience] = useState("");
  const [IndiaAbroad, setIndiaAbroad] = useState("");
  const [Country, setCountry1] = useState("");
  const [State, setState1] = useState("");
  const [lowSalary, setlowSalary] = useState("");
  const [highSalary, sethighSalary] = useState("");
  const [FunctionalArea, setFunctionalArea] = useState("");
  const [SubFunctionalArea, setSubFunctionalArea] = useState("");
  const [LinkJD, setLinkJD] = useState("");
  const [JBlink, setJBlink] = useState("");
  const [ExNot, setExNot] = useState("");

  const [lakhK, setlakhK] = useState("");
  const [category, setcategory] = useState("");
  const [currency, setcurrency] = useState("");

  const [employeeList, setEmployeeList] = useState([]);
  const [MSList, setMSList] = useState([]);
  const [CompanyList, setCompanyList] = useState([]);

  React.useEffect(() => {
    console.log(MSList);
    console.log(data);
    getMSRep();
    getNameofCompany();
  }, []);

  const [selectiveEmployee, setselectiveEmployee] = useState([]);

  // To archive the positions that have been completed and and to put into the archive table
  const archiveEmployee = () => {
    axios
      .post("http://localhost:3001/archive", {
        empId: empId,
        NameofCompany: NameofCompany,
        BusinessTerm: BusinessTerm,
        category: category,
        Priority: Priority,
        NOP: NOP,
        SPOC: SPOC,
        EdReq: EdReq,
        JoiningTime: JoiningTime,
        TargetComp: TargetComp,
        Skill1: Skill1,
        Skill2: Skill2,
        Skill3: Skill3,
        Skill4: Skill4,
        Skill5: Skill5,
        MSrep: MSrep,
        LowExperience: LowExperience,
        HighExperience: HighExperience,
        IndiaAbroad: IndiaAbroad,
        Country: Country,
        State: State,
        lowSalary: lowSalary,
        highSalary: highSalary,
        lakhK: lakhK,
        currency: currency,
        FunctionalArea: FunctionalArea,
        SubFunctionalArea: SubFunctionalArea,
        LinkJD: LinkJD,
        JBlink: JBlink,
        ExNot: ExNot,
      })
      .then(() => {
        console.log("success in archive");
        deleteEmployee(empId);
        alert("Succesfully archived");
      });
  };

  // To delete the positions from database and put them into deletepos table
  const deleteposition = () => {
    axios
      .post("http://localhost:3001/delete", {
        empId: empId,
        NameofCompany: NameofCompany,
        BusinessTerm: BusinessTerm,
        category: category,
        Priority: Priority,
        NOP: NOP,
        SPOC: SPOC,
        EdReq: EdReq,
        JoiningTime: JoiningTime,
        TargetComp: TargetComp,
        Skill1: Skill1,
        Skill2: Skill2,
        Skill3: Skill3,
        Skill4: Skill4,
        Skill5: Skill5,
        MSrep: MSrep,
        LowExperience: LowExperience,
        HighExperience: HighExperience,
        IndiaAbroad: IndiaAbroad,
        Country: Country,
        State: State,
        lowSalary: lowSalary,
        highSalary: highSalary,
        lakhK: lakhK,
        currency: currency,
        FunctionalArea: FunctionalArea,
        SubFunctionalArea: SubFunctionalArea,
        LinkJD: LinkJD,
        JBlink: JBlink,
        ExNot: ExNot,
      })
      .then(() => {
        console.log("success in delete");
        deleteEmployee(empId);
        alert("Succesfully deleted");
      });
  };

  //To get the positions from database
  const getEmployees = () => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
      console.log(response);
      console.log("successfull in getting data");
    });
  };

  const showEmployees = (id) => {
    axios.get("http://localhost:3001/selective").then((response) => {
      setselectiveEmployee(response.data);
      console.log(response);
      console.log("successfull in getting data");
    });
  };

  // To update the positions in the edit form
  const updateEmployee = (id) => {
    axios
      .put("http://localhost:3001/update", {
        NameofCompany: NameofCompany,
        BusinessTerm: BusinessTerm,
        category: category,
        Priority: Priority,
        NOP: NOP,
        SPOC: SPOC,
        EdReq: EdReq,
        JoiningTime: JoiningTime,
        TargetComp: TargetComp,
        Skill1: Skill1,
        Skill2: Skill2,
        Skill3: Skill3,
        Skill4: Skill4,
        Skill5: Skill5,
        MSrep: MSrep,
        LowExperience: LowExperience,
        HighExperience: HighExperience,
        IndiaAbroad: IndiaAbroad,
        Country: Country,
        State: State,
        lowSalary: lowSalary,
        highSalary: highSalary,
        lakhK: lakhK,
        currency: currency,
        FunctionalArea: FunctionalArea,
        SubFunctionalArea: SubFunctionalArea,
        LinkJD: LinkJD,
        JBlink: JBlink,
        ExNot: ExNot,
        id: id,
      })
      .then((response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  NameofCompany: NameofCompany,
                  BusinessTerm: BusinessTerm,
                  category: category,
                  Priority: Priority,
                  NOP: NOP,
                  SPOC: SPOC,
                  EdReq: EdReq,
                  JoiningTime: JoiningTime,
                  TargetComp: TargetComp,
                  Skill1: Skill1,
                  Skill2: Skill2,
                  Skill3: Skill3,
                  Skill4: Skill4,
                  Skill5: Skill5,
                  MSrep: MSrep,
                  LowExperience: LowExperience,
                  HighExperience: HighExperience,
                  IndiaAbroad: IndiaAbroad,
                  Country: Country,
                  State: State,
                  lowSalary: lowSalary,
                  highSalary: highSalary,
                  lakhK: lakhK,
                  currency: currency,
                  FunctionalArea: FunctionalArea,
                  SubFunctionalArea: SubFunctionalArea,
                  LinkJD: LinkJD,
                  JBlink: JBlink,
                  ExNot: ExNot,
                }
              : val;
          })
        );
        alert("Successfully Updated id:" + id);
      });
  };

  //To delete the postions from employee table
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  function refreshPage() {
    window.location.reload();
  }

  // getting the list of the MSRep from Login table
  const getMSRep = () => {
    axios.get("http://localhost:3001/MSRep").then((response) => {
      setMSList(response.data);
      console.log(response);
      console.log("successfull in MS getting data");
    });
  };

  // getting the list of the Name Of Company from Company table
  const getNameofCompany = () => {
    axios.get("http://localhost:3001/NameofCompany").then((response) => {
      setCompanyList(response.data);
      console.log(response);
      console.log("successfull in MS getting data");
    });
  };

  // setting lakh and k as per india abroad
  const handleChange = (event) => {
    setIndiaAbroad(event.target.value);
    if (IndiaAbroad.localeCompare("India")) {
      setlakhK("Lakh");
    } else {
      setlakhK("K");
    }
  };

  // setting category as per salary
  const handleCategory = (event) => {
    sethighSalary(event.target.value);
    if (highSalary > 75) {
      setcategory("A");
    } else if (highSalary >= 35 && highSalary <= 75) {
      setcategory("B");
    } else if (highSalary >= 15 && highSalary < 35) {
      setcategory("C");
    } else {
      setcategory("D");
    }
    setcurrency("INR");
  };

  const handleinit = (event) => {
    setselectiveEmployee(event.target.value);
    const sid = event.target.value;
    employeeList.map((val, key) => {
      if (val.id == sid) {
        setempId(val.id);
        setNameofCompany(val.NameofCompany);
        setBusinessTerm(val.BusinessTerm);
        setcategory(val.category);
        setPriority(val.Priority);
        setNOP(val.NOP);
        setSPOC(val.SPOC);
        setEdReq(val.EdReq);
        setJoiningTime(val.JoiningTime);
        setTargetComp(val.TargetComp);
        setSkill1(val.Skill1);
        setSkill2(val.Skill2);
        setSkill3(val.Skill3);
        setSkill4(val.Skill4);
        setSkill5(val.Skill5);
        setMSrep(val.MSrep);
        setLowExperience(val.LowExperience);
        setHighExperience(val.HighExperience);
        setIndiaAbroad(val.IndiaAbroad);
        setCountry1(val.Country);
        setState1(val.State);
        setlowSalary(val.lowSalary);
        sethighSalary(val.highSalary);
        setlakhK(val.lakhK);
        setcurrency(val.currency);
        setFunctionalArea(val.FunctionalArea);
        setSubFunctionalArea(val.SubFunctionalArea);
        setLinkJD(val.LinkJD);
        setJBlink(val.JBlink);
        setExNot(val.ExNot);
      }
    });
  };

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const country = [...new Set(data.map((item) => item.country))];
  country.sort();

  const handleCountry = (e, f) => {
    let states = data.filter((state) => state.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setCountry1(f);
    setState(states);
  };

  const handleState = (e, g) => {
    let cities = data.filter((city) => city.subcountry === e.target.value);
    console.log(cities);
    setCities(cities);
    setState1(g);
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="fin">
        <div className="frm111">
          <div className="employees2">
            {/* now this employeelist doesnt depend upon yhe button */}
            {employeeList.map((val, key) => {
              if (val.id == selectiveEmployee) {
                return (
                  <div className="employee">
                    <div>
                      <button
                        className="bttnsE"
                        id="up"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to Update id" + val.id
                            )
                          ) {
                            updateEmployee(val.id);
                          }
                        }}
                      >
                        {" "}
                        Update
                      </button>

                      <button
                        className="bttnsE"
                        id="del"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete id" + val.id
                            )
                          )
                            deleteposition(val.id);
                        }}
                      >
                        Delete
                      </button>

                      <button
                        className="bttnsE"
                        id="arc"
                        onClick={() => {
                          setempId(val.id);
                          setNameofCompany(val.NameofCompany);
                          setBusinessTerm(val.BusinessTerm);
                          setPriority(val.Priority);
                          setNOP(val.NOP);
                          setSPOC(val.SPOC);
                          setEdReq(val.EdReq);
                          setJoiningTime(val.JoiningTime);
                          setTargetComp(val.TargetComp);
                          setSkill1(val.Skill1);
                          setSkill2(val.Skill2);
                          setSkill3(val.Skill3);
                          setSkill4(val.Skill4);
                          setSkill5(val.Skill5);
                          setMSrep(val.MSrep);
                          setLowExperience(val.LowExperience);
                          setHighExperience(val.HighExperience);
                          setIndiaAbroad(val.IndiaAbroad);
                          setCountry1(val.Country);
                          setState1(val.State);
                          setlowSalary(val.lowSalary);
                          sethighSalary(val.highSalary);
                          setFunctionalArea(val.FunctionalArea);
                          setSubFunctionalArea(val.SubFunctionalArea);
                          setLinkJD(val.LinkJD);
                          setJBlink(val.JBlink);
                          setExNot(val.ExNot);
                          if (
                            window.confirm(
                              "Are you sure you want to archive id:" + val.id
                            )
                          ) {
                            archiveEmployee(val.id);
                          }
                        }}
                      >
                        {" "}
                        Complete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div id="srDD">
            <button
              className="bttns"
              id="srEF"
              onClick={() => {
                getEmployees();
              }}
            >
              Search
            </button>

            <select
              name=""
              id="srch"
              onChange={(e) => {
                handleinit(e);
              }}
            >
              {employeeList.map((val, key) => {
                return <option value={val.id}>{val.id}</option>;
              })}
            </select>
          </div>
        </div>

        {employeeList.map((val, key) => {
          if (val.id == selectiveEmployee) {
            return (
              <div>
                <div className="Forms">
                  {/* EntryForm1 */}
                  <div className="EntryForm1">
                    <hr />
                    <div className="frm">
                      <label htmlFor="pos">Name of Company </label>
                      <select
                        name="company"
                        id="pos"
                        type="text"
                        onChange={(event) => {
                          setNameofCompany(event.target.value);
                        }}
                        required
                      >
                        <option>{val.NameofCompany}</option>
                        <option value="" disabled>
                          Select option
                        </option>
                        {CompanyList.map((val, key) => {
                          return (
                            <option value={val.NameofCompany}>
                              {val.NameofCompany}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <hr />

                    <div className="frm">
                      <label htmlFor="name">Business Term </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={val.BusinessTerm}
                        onChange={(event) => {
                          setBusinessTerm(event.target.value);
                        }}
                      ></input>
                    </div>

                    <hr />

                    <div className="frm">
                      <label htmlFor="pos">SPOC </label>
                      <select
                        name="company"
                        id="pos"
                        onChange={(event) => {
                          setSPOC(event.target.value);
                        }}
                      >
                        {/* <option value="" disabled selected>Select option</option> */}
                        <option>{val.SPOC}</option>
                        <option value="" disabled>
                          Select option
                        </option>
                        <option value="Vijay Tripathy">Vijay Tripathy</option>
                        <option value="Gourav Pant">Gourav Pant</option>
                        <option value="Abhishek Tyagi">Abhishek Tyagi</option>
                        <option value="Alvin">Alvin</option>
                        <option value="Aditya">Aditya</option>
                        <option value="Sandeep">Sandeep</option>
                        <option value="Subham">Subham</option>
                      </select>
                    </div>

                    <hr />

                    <div className="frm">
                      <label htmlFor="pos">Priority </label>
                      <select
                        name="company"
                        id="pos"
                        onChange={(event) => {
                          setPriority(event.target.value);
                        }}
                      >
                        <option>{val.Priority}</option>
                        <option value="" disabled>
                          Select option
                        </option>
                        <option value="High Priority">High Priority</option>
                        <option value="Feedback Pending">
                          Feedback Pending
                        </option>
                        <option value="Moderate">Moderate</option>
                        <option value="Hold">Hold</option>
                      </select>
                    </div>

                    <hr />

                    <div className="frm" id="exp">
                      <label htmlFor="name">Salary ({val.lakhK})</label>
                      <input
                        type="number"
                        name="name"
                        placeholder="Low Range"
                        className="exp"
                        id="sal1"
                        defaultValue={val.lowSalary}
                        onChange={(event) => {
                          setlowSalary(event.target.value);
                        }}
                      ></input>
                      <input
                        type="number"
                        name="name"
                        placeholder="High Range"
                        className="exp"
                        id="sal2"
                        defaultValue={val.highSalary}
                        onChange={(e) => handleCategory(e)}
                      ></input>
                    </div>

                    <hr />

                    <div className="frm1" id="expC">
                      <label htmlFor="name" id="Cat">
                        Category
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={val.category}
                        readonly="readonly"
                        id="catinE"
                        disabled="disabled"
                      ></input>
                    </div>

                    <hr />
                  </div>

                  <div className="EntryForm2">
                    <hr />

                    <div className="frm">
                      <label htmlFor="pos">India/Abroad </label>
                      <select name="company" id="pos" onChange={handleChange}>
                        <option value="">{val.IndiaAbroad}</option>
                        <option value="" disabled>
                          Select option
                        </option>
                        <option value="India">India</option>
                        <option value="Abroad">Abroad</option>
                      </select>
                    </div>

                    <hr />

                    <div>
                      <div className="frm" id="exp">
                        <label htmlFor="pos">Country </label>
                        <select
                          onChange={(e) => handleCountry(e, e.target.value)}
                          id="cntry"
                        >
                          <option value="">{val.Country}</option>
                          <option value="" disabled>
                            Select Country
                          </option>
                          {country.map((items) => (
                            <option key={items} value={getCountry}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </div>

                      <hr />

                      {/* <div className="frm" id="exp">
                        <label htmlFor="pos">State </label>
                        <select
                          onChange={(e) => handleState(e, e.target.value)}
                          id="cntry2"
                        >
                          <option value="">{val.State}</option>
                          <option value="" disabled>
                            Select State
                          </option>
                          {getState.map((items) => (
                            <option key={items} value={selectedState}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </div> */}

                      <div className="frm">
                        <label htmlFor="name">Location </label>
                        <input
                          type="text"
                          name="name"
                          defaultValue={val.State}
                          onChange={(event) => {
                            setState1(event.target.value);
                          }}
                        ></input>
                      </div>
                    </div>

                    <hr />

                    <div className="frm">
                      <label htmlFor="name">No of Positions </label>
                      <input
                        type="number"
                        name="name"
                        defaultValue={val.NOP}
                        onChange={(event) => {
                          setNOP(event.target.value);
                        }}
                      ></input>
                    </div>

                    <hr />

                    <div className="frm">
                      <label htmlFor="name">Link of JD </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={val.LinkJD}
                        onChange={(event) => {
                          setLinkJD(event.target.value);
                        }}
                      ></input>{" "}
                      <a href={val.LinkJD} target="blank" id="jb">
                        Visit Link
                      </a>
                    </div>

                    <hr />

                    <div className="frm1">
                      <label htmlFor="name">Job Board Link</label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={val.JBlink}
                        onChange={(event) => {
                          setJBlink(event.target.value);
                        }}
                      ></input>{" "}
                      <a href={val.JBlink} target="blank" id="jb">
                        Visit Link
                      </a>
                    </div>

                    <hr />
                  </div>
                </div>

                <div className="Edit">
                  {show ? (
                    <div className="ShowHide">
                      <div className="EntryForm3">
                        {/* <div className="frm">
                  <label htmlFor="name">Industry </label>
                  <input type="text" name="name"></input>
                </div>

                <hr /> */}

                        <div className="frm">
                          <label htmlFor="pos">Functional Area </label>
                          <select
                            name="company"
                            id="pos"
                            onChange={(event) => {
                              setFunctionalArea(event.target.value);
                            }}
                          >
                            <option value="">{val.FunctionalArea}</option>
                            <option value="" disabled>
                              Select option
                            </option>
                            <option value="NodeJs">NodeJs</option>
                            <option value="Java">Java</option>
                            <option value="Bootstrap">Bootstrap</option>
                            <option value="Mongo">Mongo</option>
                            <option value="Express">Express</option>
                            <option value="SQL">SQL</option>
                            <option value="C++">C++</option>
                          </select>
                        </div>

                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Sub Functional Area </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.SubFunctionalArea}
                            onChange={(event) => {
                              setSubFunctionalArea(event.target.value);
                            }}
                          ></input>
                        </div>

                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Skill 1</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.Skill1}
                            onChange={(event) => {
                              setSkill1(event.target.value);
                            }}
                          ></input>
                        </div>

                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Skill 2</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.Skill2}
                            onChange={(event) => {
                              setSkill2(event.target.value);
                            }}
                          ></input>
                        </div>
                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Skill 3</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.Skill3}
                            onChange={(event) => {
                              setSkill3(event.target.value);
                            }}
                          ></input>
                        </div>
                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Skill 4</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.Skill4}
                            onChange={(event) => {
                              setSkill4(event.target.value);
                            }}
                          ></input>
                        </div>
                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Skill 5</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.Skill5}
                            onChange={(event) => {
                              setSkill5(event.target.value);
                            }}
                          ></input>
                        </div>

                        <hr />

                        <div className="frm" id="exp">
                          <label htmlFor="name"> Experience </label>
                          <input
                            type="number"
                            name="name"
                            placeholder="Low Range"
                            className="exp"
                            id="exp1"
                            defaultValue={val.LowExperience}
                            onChange={(event) => {
                              setLowExperience(event.target.value);
                            }}
                          ></input>
                          <input
                            type="number"
                            name="name"
                            placeholder="High Range"
                            className="exp"
                            id="exp2"
                            defaultValue={val.HighExperience}
                            onChange={(event) => {
                              setHighExperience(event.target.value);
                            }}
                          ></input>
                        </div>

                        <hr />

                        <div className="frm">
                          <label htmlFor="name">Joining Time </label>
                          <select
                            name="company"
                            id="posC"
                            onChange={(event) => {
                              setJoiningTime(event.target.value);
                            }}
                          >
                            <option value="">{val.JoiningTime}</option>
                            <option value="" disabled>
                              Select option
                            </option>
                            <option value="15 days">15 days</option>
                            <option value="30 days">30 days</option>
                            <option value="45 days">45 days</option>
                            <option value="60 days">60 days</option>
                          </select>
                        </div>

                        <hr />
                      </div>

                      <div className="EntryForm4">
                        <div className="frm">
                          <label htmlFor="name">MS Representative </label>
                          <select
                            name="company"
                            id="pos"
                            onChange={(event) => {
                              setMSrep(event.target.value);
                            }}
                          >
                            <option value="">{val.MSrep}</option>
                            <option value="" disabled>
                              Select option
                            </option>
                            {MSList.map((val, key) => {
                              return (
                                <option value={val.username}>
                                  {val.username}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <hr />

                        <div className="frm" id="tc">
                          <label htmlFor="name">Target Companies </label>
                          <textarea
                            type="text"
                            name="name"
                            rows={12}
                            columns={40}
                            id="tx"
                            defaultValue={val.TargetComp}
                            onChange={(event) => {
                              setTargetComp(event.target.value);
                            }}
                          ></textarea>
                        </div>

                        <hr />

                        <div className="frm" id="er">
                          <label htmlFor="pos">Educational Requirements </label>
                          <select
                            name="company"
                            id="pos"
                            onChange={(event) => {
                              setEdReq(event.target.value);
                            }}
                          >
                            <option value="">{val.EdReq}</option>
                            <option value="" disabled>
                              Select option
                            </option>
                            <option value="B-Tech">B-Tech</option>
                            <option value="B.Sc">B.Sc</option>
                            <option value="BBA">BBA</option>
                            <option value="MBA">MBA</option>
                          </select>
                        </div>

                        <hr />

                        <div className="frm" id="tc">
                          <label htmlFor="name">Recruiter Notes </label>
                          <textarea
                            type="text"
                            name="name"
                            rows={12}
                            columns={40}
                            id="tx"
                            className="exnotes"
                            defaultValue={val.ExNot}
                            onChange={(event) => {
                              setExNot(event.target.value);
                            }}
                          ></textarea>
                        </div>
                        <br />
                        <br />
                        <br />
                        <hr />
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="dpEF">
                  <button
                    onClick={() => setShow(true)}
                    className="bttnsE"
                    id="svE"
                  >
                    Show More
                  </button>
                  <button
                    onClick={() => setShow(false)}
                    className="bttnsE"
                    id="nwE"
                  >
                    Hide
                  </button>
                </div>
              </div>
            );
          }
        })}

        {/* <div className="employees">
          
          {employeeList.map((val, key) => {
            if (val.id == selectiveEmployee) {
              return (
                <div className="employee">
                  <div>
                    <button
                      className="bttnsE"
                      id="up"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to Update id" + val.id
                          )
                        ) {
                          updateEmployee(val.id);
                        }
                      }}
                    >
                      {" "}
                      Update
                    </button>

                    <button
                      className="bttnsE"
                      id="del"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete id" + val.id
                          )
                        )
                          deleteposition(val.id);
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="bttnsE"
                      id="arc"
                      onClick={() => {
                        setempId(val.id);
                        setNameofCompany(val.NameofCompany);
                        setBusinessTerm(val.BusinessTerm);
                        setPriority(val.Priority);
                        setNOP(val.NOP);
                        setSPOC(val.SPOC);
                        setEdReq(val.EdReq);
                        setJoiningTime(val.JoiningTime);
                        setTargetComp(val.TargetComp);
                        setSkill1(val.Skill1);
                        setSkill2(val.Skill2);
                        setSkill3(val.Skill3);
                        setSkill4(val.Skill4);
                        setSkill5(val.Skill5);
                        setMSrep(val.MSrep);
                        setLowExperience(val.LowExperience);
                        setHighExperience(val.HighExperience);
                        setIndiaAbroad(val.IndiaAbroad);
                        setCountry1(val.Country);
                        setState1(val.State);
                        setlowSalary(val.lowSalary);
                        sethighSalary(val.highSalary);
                        setFunctionalArea(val.FunctionalArea);
                        setSubFunctionalArea(val.SubFunctionalArea);
                        setLinkJD(val.LinkJD);
                        setJBlink(val.JBlink);
                        setExNot(val.ExNot);
                        if (
                          window.confirm(
                            "Are you sure you want to archive id:" + val.id
                          )
                        ) {
                          archiveEmployee(val.id);
                        }
                      }}
                    >
                      {" "}
                      Complete
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div> */}
      </div>
    </>
  );
};

export default Edit;
