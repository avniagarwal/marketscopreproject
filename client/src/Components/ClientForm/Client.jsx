import React, { useEffect, useMemo, useState } from "react";
import "./Client.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";

import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";

const Client = () => {
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedSate] = useState();
  const [cities, setCities] = useState([]);

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

  const [lakhK, setlakhK] = useState(" ");
  const [category, setcategory] = useState("");
  const [currency, setcurrency] = useState("");

  const [newNameofCompany, setnewNameofCompany] = useState("");

  const [employeeList, setEmployeeList] = useState([]);
  const [MSList, setMSList] = useState([]);
  const [CompanyList, setCompanyList] = useState([]);
  const [SPOClist, setSPOClist] = useState([]);

  const [skillList, setskillList] = useState([]);

  const [NameofCompanyError, setNameofCompanyError] = useState(false);
  const [BusinessError, setBusinessError] = useState(false);
  const [PriorityError, setPriorityError] = useState(false);
  const [PositionError, setPositionError] = useState(false);
  const [SPOCError, setSPOCError] = useState(false);
  const [EdReqError, setEdReqError] = useState(false);
  const [JoiningTimeError, setJoiningTimeError] = useState(false);
  const [TargetCompError, setTargetCompError] = useState(false);
  const [Skill1Error, setSkill1Error] = useState(false);
  const [Skill2Error, setSkill2Error] = useState(false);
  const [Skill3Error, setSkill3Error] = useState(false);
  const [Skill4Error, setSkill4Error] = useState(false);
  const [Skill5Error, setSkill5Error] = useState(false);
  const [MSrepError, setMSrepError] = useState(false);
  const [LowExperienceError, setLowExperienceError] = useState(false);
  const [HighExperienceError, setHighExperienceError] = useState(false);
  const [IndiaAbroadError, setIndiaAbroadError] = useState(false);
  const [CountryError, setCountry1Error] = useState(false);
  const [StateError, setState1Error] = useState(false);
  const [lowSalaryError, setlowSalaryError] = useState(false);
  const [highSalaryError, sethighSalaryError] = useState(false);
  const [FunctionalAreaError, setFunctionalAreaError] = useState(false);
  const [SubFunctionalAreaError, setSubFunctionalAreaError] = useState(false);
  const [LinkJDError, setLinkJDError] = useState(false);
  const [JBlinkError, setJBlinkError] = useState(false);
  const [ExNotError, setExNotError] = useState(false);

  //Renders once when the page loads for the first time
  React.useEffect(() => {
    console.log(MSList);
    console.log(data);
    getMSRep();
    getNameofCompany();
    // setlakhK("Lakh");
  }, []);

  //Adding new entry into db from CDF
  const adEmployee = () => {
    if (BusinessTerm === "") {
      setBusinessError(true);
    } else {
      setBusinessError(false);
    }
    if (NOP === "") {
      setPositionError(true);
    } else {
      setPositionError(false);
    }
    if (SPOC === "") {
      setSPOCError(true);
    } else {
      setSPOCError(false);
    }
    if (NameofCompany === "") {
      setNameofCompanyError(true);
    } else {
      setNameofCompanyError(false);
    }
    if (FunctionalArea === "") {
      setFunctionalAreaError(true);
    } else {
      setFunctionalAreaError(false);
    }
    if (SubFunctionalArea === "") {
      setSubFunctionalAreaError(true);
    } else {
      setSubFunctionalAreaError(false);
    }
    if (Skill1 === "") {
      setSkill1Error(true);
    } else {
      setSkill1Error(false);
    }
    
    if (IndiaAbroad === "") {
      setIndiaAbroadError(true);
    } else {
      setIndiaAbroadError(false);
    }
    if (Country === "") {
      setCountry1Error(true);
    } else {
      setCountry1Error(false);
    }
    if (State === "") {
      setState1Error(true);
    } else {
      setState1Error(false);
    }
    if (JoiningTime === "") {
      setJoiningTimeError(true);
    } else {
      setJoiningTimeError(false);
    }
    if (Priority === "") {
      setPriorityError(true);
    } else {
      setPriorityError(false);
    }
    if (MSrep === "") {
      setMSrepError(true);
    } else {
      setMSrepError(false);
    }
    if (LinkJD === "") {
      setLinkJDError(true);
    } else {
      setLinkJDError(false);
    }
    if (TargetComp === "") {
      setTargetCompError(true);
    } else {
      setTargetCompError(false);
    }
    if (EdReq === "") {
      setEdReqError(true);
    } else {
      setEdReqError(false);
    }
    if (JBlink === "") {
      setJBlinkError(true);
    } else {
      setJBlinkError(false);
    }
    if (lowSalary === "") {
      setlowSalaryError(true);
    } else {
      setlowSalaryError(false);
    }
    if (highSalary === "") {
      sethighSalaryError(true);
    } else {
      sethighSalaryError(false);
    }
    if (LowExperience === "") {
      setLowExperienceError(true);
    } else {
      setLowExperienceError(false);
    }
    if (HighExperience === "") {
      setHighExperienceError(true);
    } else {
      setHighExperienceError(false);
    }
    if (ExNot === "") {
      setExNotError(true);
    } else {
      setExNotError(false);
    }
    if (
      NameofCompany !== "" &&
      BusinessTerm !== "" &&
      Priority !== "" &&
      NOP !== "" &&
      SPOC !== "" &&
      EdReq !== "" &&
      JoiningTime !== "" &&
      TargetComp !== "" &&
      Skill1 !== "" &&
      MSrep !== "" &&
      LowExperience !== "" &&
      HighExperience !== "" &&
      IndiaAbroad !== "" &&
      Country !== "" &&
      State !== "" &&
      lowSalary !== "" &&
      highSalary !== "" &&
      FunctionalArea !== "" &&
      SubFunctionalArea !== "" &&
      LinkJD !== "" &&
      JBlink !== "" &&
      ExNot !== ""
    ) {
      axios
        .post("http://localhost:3001/create", {
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
          console.log("success");
          // window.confirm("Are you sure you want to submit");
          alert("Succesfully Submitted " + NameofCompany);
          // refreshPage();
        });
    } else {
      alert("Input All values");
      console.log("comapny " + NameofCompanyError);
      console.log("BusinessError " + BusinessError);
      console.log("PriorityError " + PriorityError);
      console.log("PositionError " + PositionError);
      console.log("SPOCError " + SPOCError);
      console.log("EdReqError " + EdReqError);
      console.log("JoiningTimeError " + JoiningTimeError);
      console.log("TargetCompError " + TargetCompError);
      console.log("Skill1Error " + Skill1Error);
      console.log("Skill2Error " + Skill2Error);
      console.log("Skill3Error " + Skill3Error);
      console.log("Skill4Error " + Skill4Error);
      console.log("Skill5Error " + Skill5Error);
      console.log("MSrepError " + MSrepError);
      console.log("LowExperienceError " + LowExperienceError);
      console.log("HighExperienceError " + HighExperienceError);
      console.log("IndiaAbroadError " + IndiaAbroadError);
      console.log("CountryError " + CountryError);
      console.log("StateError " + StateError);
      console.log("lowSalaryError " + lowSalaryError);
      console.log("highSalaryError " + highSalaryError);
      console.log("FunctionalAreaError " + FunctionalAreaError);
      console.log("SubFunctionalAreaError " + SubFunctionalAreaError);
      console.log("LinkJDError " + LinkJDError);
      console.log("JBlinkError " + JBlinkError);
      console.log("ExNotError " + ExNotError);
    }
  };

  //Getting the data from employee db for edit from
  const getEmployees = () => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
      console.log(response);
      console.log("successfull in getting data");
    });
  };

  const getskills = () => {
    axios.get("http://localhost:3001/skills").then((response) => {
      setskillList(response.data);
      console.log(response);
      console.log("successfull in getting skills");
    });
  };

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

  // getting the list of the Name Of Company from Company table
  const getSPOC = () => {
    axios.get("http://localhost:3001/SPOC").then((response) => {
      setSPOClist(response.data);
      console.log(response);
      console.log("successfull in getting SPOC names data");
    });
  };

  //Setting Lakh/K for India/Abroad
  const handleChange = (event) => {
    setIndiaAbroad(event.target.value);
    setmoney();
  };

  const setmoney = ()=>{
    if (IndiaAbroad.localeCompare("India")) {
      setlakhK("Lakh");
    }
    if (IndiaAbroad.localeCompare("Abroad")) {
      setlakhK(" K ");
    }
  }

  //To assign category as per salary
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
    if(IndiaAbroad === 'India')
    {
      setcurrency("INR");
    }
    if(IndiaAbroad === 'Abroad')
    {
      setcurrency("USD");
    }
    
  };

  const handleCompany = (event) => {
    setNameofCompany(event.target.value);
    getSPOC();
  };


  // getting the country list from API
  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  var country = [];
  if (IndiaAbroad === "India") {
    country = ["India"];
  }
  if (IndiaAbroad === "Abroad") {
    country = [...new Set(data.map((item) => item.country))];
  }
  //  console.log(country);
  country.sort();

  const handleCountry = (e, f) => {
    const val = e.target.value;
    let currency_code;
    switch(val){
        case "Afghanistan": 
            currency_code= "AFN"
        break;
        case "Albania": 
            currency_code= "ALL"
        break;
        case "Algeria": 
            currency_code= "DZD"
        break;
        case "American Samoa": 
            currency_code= "USD"
        break;
        case "Andorra": 
            currency_code= "EUR"
        break;
        case "Angola": 
            currency_code= "AOA"
        break;
        case "Anguilla": 
            currency_code= "XCD"
        break;
        case "Antarctica": 
            currency_code= "XCD"
        break;
        case "Antigua and Barbuda": 
            currency_code= "XCD"
        break;
        case "Argentina": 
            currency_code= "ARS"
        break;
        case "Armenia": 
            currency_code= "AMD"
        break;
        case "Aruba": 
            currency_code= "AWG"
        break;
        case "Australia": 
            currency_code= "AUD"
        break;
        case "Austria": 
            currency_code= "EUR"
        break;
        case "Azerbaijan": 
            currency_code= "AZN"
        break;
        case "Bahamas": 
            currency_code= "BSD"
        break;
        case "Bahrain": 
            currency_code= "BHD"
        break;
        case "Bangladesh": 
            currency_code= "BDT"
        break;
        case "Barbados": 
            currency_code= "BBD"
        break;
        case "Belarus": 
            currency_code= "BYR"
        break;
        case "Belgium": 
            currency_code= "EUR"
        break;
        case "Belize": 
            currency_code= "BZD"
        break;
        case "Benin": 
            currency_code= "XOF"
        break;
        case "Bermuda": 
            currency_code= "BMD"
        break;
        case "Bhutan": 
            currency_code= "BTN"
        break;
        case "Bolivia": 
            currency_code= "BOB"
        break;
        case "Bosnia and Herzegovina": 
            currency_code= "BAM"
        break;
        case "Botswana": 
            currency_code= "BWP"
        break;
        case "Bouvet Island": 
            currency_code= "NOK"
        break;
        case "Brazil": 
            currency_code= "BRL"
        break;
        case "British Indian Ocean Territory": 
            currency_code= "USD"
        break;
        case "Brunei": 
            currency_code= "BND"
        break;
        case "Bulgaria": 
            currency_code= "BGN"
        break;
        case "Burkina Faso": 
            currency_code= "XOF"
        break;
        case "Burundi": 
            currency_code= "BIF"
        break;
        case "Cambodia": 
            currency_code= "KHR"
        break;
        case "Cameroon": 
            currency_code= "XAF"
        break;
        case "Canada": 
            currency_code= "CAD"
        break;
        case "Cape Verde": 
            currency_code= "CVE"
        break;
        case "Cayman Islands": 
            currency_code= "KYD"
        break;
        case "Central African Republic": 
            currency_code= "XAF"
        break;
        case "Chad": 
            currency_code= "XAF"
        break;
        case "Chile": 
            currency_code= "CLP"
        break;
        case "China": 
            currency_code= "CNY"
        break;
        case "Christmas Island": 
            currency_code= "AUD"
        break;
        case "Cocos (Keeling) Islands": 
            currency_code= "AUD"
        break;
        case "Colombia": 
            currency_code= "COP"
        break;
        case "Comoros": 
            currency_code= "KMF"
        break;
        case "Congo": 
            currency_code= "XAF"
        break;
        case "Cook Islands": 
            currency_code= "NZD"
        break;
        case "Costa Rica": 
            currency_code= "CRC"
        break;
        case "Croatia": 
            currency_code= "HRK"
        break;
        case "Cuba": 
            currency_code= "CUP"
        break;
        case "Cyprus": 
            currency_code= "EUR"
        break;
        case "Czech Republic": 
            currency_code= "CZK"
        break;
        case "Denmark": 
            currency_code= "DKK"
        break;
        case "Djibouti": 
            currency_code= "DJF"
        break;
        case "Dominica": 
            currency_code= "XCD"
        break;
        case "Dominican Republic": 
            currency_code= "DOP"
        break;
        case "East Timor": 
            currency_code= "USD"
        break;
        case "Ecuador": 
            currency_code= "ECS"
        break;
        case "Egypt": 
            currency_code= "EGP"
        break;
        case "El Salvador": 
            currency_code= "SVC"
        break;
        case "England": 
            currency_code= "GBP"
        break;
        case "Equatorial Guinea": 
            currency_code= "XAF"
        break;
        case "Eritrea": 
            currency_code= "ERN"
        break;
        case "Estonia": 
            currency_code= "EUR"
        break;
        case "Ethiopia": 
            currency_code= "ETB"
        break;
        case "Falkland Islands": 
            currency_code= "FKP"
        break;
        case "Faroe Islands": 
            currency_code= "DKK"
        break;
        case "Fiji Islands": 
            currency_code= "FJD"
        break;
        case "Finland": 
            currency_code= "EUR"
        break;
        case "France": 
            currency_code= "EUR"
        break;
        case "French Guiana": 
            currency_code= "EUR"
        break;
        case "French Polynesia": 
            currency_code= "XPF"
        break;
        case "French Southern territories": 
            currency_code= "EUR"
        break;
        case "Gabon": 
            currency_code= "XAF"
        break;
        case "Gambia": 
            currency_code= "GMD"
        break;
        case "Georgia": 
            currency_code= "GEL"
        break;
        case "Germany": 
            currency_code= "EUR"
        break;
        case "Ghana": 
            currency_code= "GHS"
        break;
        case "Gibraltar": 
            currency_code= "GIP"
        break;
        case "Greece": 
            currency_code= "EUR"
        break;
        case "Greenland": 
            currency_code= "DKK"
        break;
        case "Grenada": 
            currency_code= "XCD"
        break;
        case "Guadeloupe": 
            currency_code= "EUR"
        break;
        case "Guam": 
            currency_code= "USD"
        break;
        case "Guatemala": 
            currency_code= "QTQ"
        break;
        case "Guinea": 
            currency_code= "GNF"
        break;
        case "Guinea-Bissau": 
            currency_code= "CFA"
        break;
        case "Guyana": 
            currency_code= "GYD"
        break;
        case "Haiti": 
            currency_code= "HTG"
        break;
        case "Heard Island and McDonald Islands": 
            currency_code= "AUD"
        break;
        case "Holy See (Vatican City State)": 
            currency_code= "EUR"
        break;
        case "Honduras": 
            currency_code= "HNL"
        break;
        case "Hong Kong": 
            currency_code= "HKD"
        break;
        case "Hungary": 
            currency_code= "HUF"
        break;
        case "Iceland": 
            currency_code= "ISK"
        break;
        case "India": 
            currency_code= "INR"
        break;
        case "Indonesia": 
            currency_code= "IDR"
        break;
        case "Iran": 
            currency_code= "IRR"
        break;
        case "Iraq": 
            currency_code= "IQD"
        break;
        case "Ireland": 
            currency_code= "EUR"
        break;
        case "Israel": 
            currency_code= "ILS"
        break;
        case "Italy": 
            currency_code= "EUR"
        break;
        case "Ivory Coast": 
            currency_code= "XOF"
        break;
        case "Jamaica": 
            currency_code= "JMD"
        break;
        case "Japan": 
            currency_code= "JPY"
        break;
        case "Jordan": 
            currency_code= "JOD"
        break;
        case "Kazakhstan": 
            currency_code= "KZT"
        break;
        case "Kenya": 
            currency_code= "KES"
        break;
        case "Kiribati": 
            currency_code= "AUD"
        break;
        case "Kuwait": 
            currency_code= "KWD"
        break;
        case "Kyrgyzstan": 
            currency_code= "KGS"
        break;
        case "Laos": 
            currency_code= "LAK"
        break;
        case "Latvia": 
            currency_code= "LVL"
        break;
        case "Lebanon": 
            currency_code= "LBP"
        break;
        case "Lesotho": 
            currency_code= "LSL"
        break;
        case "Liberia": 
            currency_code= "LRD"
        break;
        case "Libyan Arab Jamahiriya": 
            currency_code= "LYD"
        break;
        case "Liechtenstein": 
            currency_code= "CHF"
        break;
        case "Lithuania": 
            currency_code= "LTL"
        break;
        case "Luxembourg": 
            currency_code= "EUR"
        break;
        case "Macao": 
            currency_code= "MOP"
        break;
        case "North Macedonia": 
            currency_code= "MKD"
        break;
        case "Madagascar": 
            currency_code= "MGF"
        break;
        case "Malawi": 
            currency_code= "MWK"
        break;
        case "Malaysia": 
            currency_code= "MYR"
        break;
        case "Maldives": 
            currency_code= "MVR"
        break;
        case "Mali": 
            currency_code= "XOF"
        break;
        case "Malta": 
            currency_code= "EUR"
        break;
        case "Marshall Islands": 
            currency_code= "USD"
        break;
        case "Martinique": 
            currency_code= "EUR"
        break;
        case "Mauritania": 
            currency_code= "MRO"
        break;
        case "Mauritius": 
            currency_code= "MUR"
        break;
        case "Mayotte": 
            currency_code= "EUR"
        break;
        case "Mexico": 
            currency_code= "MXN"
        break;
        case "Micronesia, Federated States of": 
            currency_code= "USD"
        break;
        case "Moldova": 
            currency_code= "MDL"
        break;
        case "Monaco": 
            currency_code= "EUR"
        break;
        case "Mongolia": 
            currency_code= "MNT"
        break;
        case "Montserrat": 
            currency_code= "XCD"
        break;
        case "Morocco": 
            currency_code= "MAD"
        break;
        case "Mozambique": 
            currency_code= "MZN"
        break;
        case "Myanmar": 
            currency_code= "MMR"
        break;
        case "Namibia": 
            currency_code= "NAD"
        break;
        case "Nauru": 
            currency_code= "AUD"
        break;
        case "Nepal": 
            currency_code= "NPR"
        break;
        case "Netherlands": 
            currency_code= "EUR"
        break;
        case "Netherlands Antilles": 
            currency_code= "ANG"
        break;
        case "New Caledonia": 
            currency_code= "XPF"
        break;
        case "New Zealand": 
            currency_code= "NZD"
        break;
        case "Nicaragua": 
            currency_code= "NIO"
        break;
        case "Niger": 
            currency_code= "XOF"
        break;
        case "Nigeria": 
            currency_code= "NGN"
        break;
        case "Niue": 
            currency_code= "NZD"
        break;
        case "Norfolk Island": 
            currency_code= "AUD"
        break;
        case "North Korea": 
            currency_code= "KPW"
        break;
        case "Northern Ireland": 
            currency_code= "GBP"
        break;
        case "Northern Mariana Islands": 
            currency_code= "USD"
        break;
        case "Norway": 
            currency_code= "NOK"
        break;
        case "Oman": 
            currency_code= "OMR"
        break;
        case "Pakistan": 
            currency_code= "PKR"
        break;
        case "Palau": 
            currency_code= "USD"
        break;
        case "Palestine": 
            currency_code= null
        break;
        case "Panama": 
            currency_code= "PAB"
        break;
        case "Papua New Guinea": 
            currency_code= "PGK"
        break;
        case "Paraguay": 
            currency_code= "PYG"
        break;
        case "Peru": 
            currency_code= "PEN"
        break;
        case "Philippines": 
            currency_code= "PHP"
        break;
        case "Pitcairn": 
            currency_code= "NZD"
        break;
        case "Poland": 
            currency_code= "PLN"
        break;
        case "Portugal": 
            currency_code= "EUR"
        break;
        case "Puerto Rico": 
            currency_code= "USD"
        break;
        case "Qatar": 
            currency_code= "QAR"
        break;
        case "Reunion": 
            currency_code= "EUR"
        break;
        case "Romania": 
            currency_code= "RON"
        break;
        case "Russian Federation": 
            currency_code= "RUB"
        break;
        case "Rwanda": 
            currency_code= "RWF"
        break;
        case "Saint Helena": 
            currency_code= "SHP"
        break;
        case "Saint Kitts and Nevis": 
            currency_code= "XCD"
        break;
        case "Saint Lucia": 
            currency_code= "XCD"
        break;
        case "Saint Pierre and Miquelon": 
            currency_code= "EUR"
        break;
        case "Saint Vincent and the Grenadines": 
            currency_code= "XCD"
        break;
        case "Samoa": 
            currency_code= "WST"
        break;
        case "San Marino": 
            currency_code= "EUR"
        break;
        case "Sao Tome and Principe": 
            currency_code= "STD"
        break;
        case "Saudi Arabia": 
            currency_code= "SAR"
        break;
        case "Scotland": 
            currency_code= "GBP"
        break;
        case "Senegal": 
            currency_code= "XOF"
        break;
        case "Serbia": 
            currency_code= "RSD"
        break;
        case "Seychelles": 
            currency_code= "SCR"
        break;
        case "Sierra Leone": 
            currency_code= "SLL"
        break;
        case "Singapore": 
            currency_code= "SGD"
        break;
        case "Slovakia": 
            currency_code= "EUR"
        break;
        case "Slovenia": 
            currency_code= "EUR"
        break;
        case "Solomon Islands": 
            currency_code= "SBD"
        break;
        case "Somalia": 
            currency_code= "SOS"
        break;
        case "South Africa": 
            currency_code= "ZAR"
        break;
        case "South Georgia and the South Sandwich Islands": 
            currency_code= "GBP"
        break;
        case "South Korea": 
            currency_code= "KRW"
        break;
        case "South Sudan": 
            currency_code= "SSP"
        break;
        case "Spain": 
            currency_code= "EUR"
        break;
        case "Sri Lanka": 
            currency_code= "LKR"
        break;
        case "Sudan": 
            currency_code= "SDG"
        break;
        case "Suriname": 
            currency_code= "SRD"
        break;
        case "Svalbard and Jan Mayen": 
            currency_code= "NOK"
        break;
        case "Swaziland": 
            currency_code= "SZL"
        break;
        case "Sweden": 
            currency_code= "SEK"
        break;
        case "Switzerland": 
            currency_code= "CHF"
        break;
        case "Syria": 
            currency_code= "SYP"
        break;
        case "Tajikistan": 
            currency_code= "TJS"
        break;
        case "Tanzania": 
            currency_code= "TZS"
        break;
        case "Thailand": 
            currency_code= "THB"
        break;
        case "The Democratic Republic of Congo": 
            currency_code= "CDF"
        break;
        case "Togo": 
            currency_code= "XOF"
        break;
        case "Tokelau": 
            currency_code= "NZD"
        break;
        case "Tonga": 
            currency_code= "TOP"
        break;
        case "Trinidad and Tobago": 
            currency_code= "TTD"
        break;
        case "Tunisia": 
            currency_code= "TND"
        break;
        case "Turkey": 
            currency_code= "TRY"
        break;
        case "Turkmenistan": 
            currency_code= "TMT"
        break;
        case "Turks and Caicos Islands": 
            currency_code= "USD"
        break;
        case "Tuvalu": 
            currency_code= "AUD"
        break;
        case "Uganda": 
            currency_code= "UGX"
        break;
        case "Ukraine": 
            currency_code= "UAH"
        break;
        case "United Arab Emirates": 
            currency_code= "AED"
        break;
        case "United Kingdom": 
            currency_code= "GBP"
        break;
        case "United States": 
            currency_code= "USD"
        break;
        case "United States Minor Outlying Islands": 
            currency_code= "USD"
        break;
        case "Uruguay": 
            currency_code= "UYU"
        break;
        case "Uzbekistan": 
            currency_code= "UZS"
        break;
        case "Vanuatu": 
            currency_code= "VUV"
        break;
        case "Venezuela": 
            currency_code= "VEF"
        break;
        case "Vietnam": 
            currency_code= "VND"
        break;
        case "Virgin Islands, British": 
            currency_code= "USD"
        break;
        case "Virgin Islands, U.S.": 
            currency_code= "USD"
        break;
        case "Wales": 
            currency_code= "GBP"
        break;
        case "Wallis and Futuna": 
            currency_code= "XPF"
        break;
        case "Western Sahara": 
            currency_code= "MAD"
        break;
        case "Yemen": 
            currency_code= "YER"
        break;
        case "Zambia": 
            currency_code= "ZMW"
        break;
        case "Zimbabwe": 
            currency_code= "ZWD"
      break;
    
    }
    setcurrency(currency_code)
    let states = data.filter((state) => state.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    // console.log(states);
    setState(states);
    setCountry1(f);
  };

  const handleState = (e, g) => {
    let cities = data.filter((city) => city.subcountry === e.target.value);
    console.log(cities);
    setCities(cities);
    setState1(g);
  };

  //to refresh the page after submit
  function refreshPage() {
    window.location.reload();
  }

  // To combine all the skills

  // let str2 = "";
  // const combine = (str) =>{
  //  str2 = str2.concat(str)
  //   setSkill1(str2);
  // }

  var skills = [
    {
      value: 1,
      label: "Java",
    },
    {
      value: 2,
      label: "C",
    },
    {
      value: 3,
      label: "C++",
    },
    {
      value: 3,
      label: "Python",
    },
    {
      value: 4,
      label: "R",
    },
    {
      value: 5,
      label: "SQL",
    },
    {
      value: 6,
      label: "MongoDB",
    },
    {
      value: 7,
      label: "ReactJs",
    },
  ];

  var handleskills = (e) => {
    setSkill1(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const [show, setShow] = useState(true);

  return (
    <>
      <div className="fin">
        <div className="frm">
          <label htmlFor="pos">
            <button
              className="bttns"
              id="svng1"
              type="submit"
              onClick={() => {
                if (window.confirm("Are you sure you want to submit?"))
                  adEmployee();
              }}
            >
              Save
            </button>
            <button className="bttns" id="sr11" onClick={() => {
                if (window.confirm("Are you sure you want to reset and start a fresh entry?"))
                  refreshPage();
              }}>
              New
            </button>
          </label>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC1">
            <hr />
            <div className="frm1">
              <label htmlFor="posC">Name of Company </label>
              <select
                name="company"
                id="posC"
                className={NameofCompanyError ? "red-border" : ""}
                type="text"
                onChange={(e) => {
                  handleCompany(e);
                }}
                required
              >
                <option value="" disabled selected>
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
              {NameofCompanyError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div className="frm1">
              <label htmlFor="posC">SPOC </label>
              <select
                name="company"
                id="posC"
                className={SPOCError ? "red-border" : ""}
                onChange={(event) => {
                  setSPOC(event.target.value);
                }}
              >
                <option value="" disabled selected id="gr">
                  Select option
                </option>
                {SPOClist.map((val, key) => {
                  if (val.NameofCompany == NameofCompany)
                    return <option value={val.SPOC}>{val.SPOC}</option>;
                })}
              </select>
              {SPOCError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div className="frm1">
              <label htmlFor="name">Business Term </label>
              <input
                type="text"
                name="name"
                className={BusinessError ? "red-border" : ""}
                required="required"
                onChange={(event) => {
                  setBusinessTerm(event.target.value);
                }}
              ></input>
              {BusinessError ? (
                <div className="error">Please enter a value</div>
              ) : null}

              {/* <input
                className={sourcederror ? "red-border" : ""}
                defaultValue={row.CVSourced}
                onChange={(event) => cvsourcedchange(event, row.ProfileID)}
              />
              {sourcederror ? (
                <div className="error">Please enter a value</div>
              ) : null} */}
            </div>

            <hr />

            <br />
            <br />

            {/* <hr />

            <div className="frm1">
              <label htmlFor="name">Industry </label>
              <input type="text" name="name"></input>
            </div> */}

            <hr />

            <div className="frm1">
              <label htmlFor="posC">Functional Area </label>
              <select
                name="company"
                id="posC"
                className={FunctionalAreaError ? "red-border" : ""}
                onChange={(event) => {
                  setFunctionalArea(event.target.value);
                }}
              >
                <option value="" disabled selected>
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
              {FunctionalAreaError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div className="frm1">
              <label htmlFor="name">Sub Functional Area </label>
              <input
                type="text"
                name="name"
                className={SubFunctionalAreaError ? "red-border" : ""}
                onChange={(event) => {
                  setSubFunctionalArea(event.target.value);
                }}
              ></input>
              {SubFunctionalAreaError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <br />
            <br />

            <hr />

            <div className="frm1">
              <label htmlFor="name">Skill 1 </label>
              <input
                type="text"
                name="name"
                className={Skill1Error ? "red-border" : ""}
                onChange={(event) => {
                  setSkill1(event.target.value);
                }}
              ></input>
              {Skill1Error ? (
                <div className="error">Please enter a value</div>
              ) : null}
              {/* <Creatable
                isMulti
                options={skills}
                id="posC"
                onChange={handleskills}
              ></Creatable> */}
            </div>
            <hr />

            <div className="frm1">
              <label htmlFor="name">Skill 2 </label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setSkill2(event.target.value);
                }}
              ></input>
            </div>
            <hr />

            <div className="frm1">
              <label htmlFor="name">Skill 3 </label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setSkill3(event.target.value);
                }}
              ></input>
            </div>
            <hr />

            <div className="frm1">
              <label htmlFor="name">Skill 4 </label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setSkill4(event.target.value);
                }}
              ></input>
            </div>
            <hr />

            <div className="frm1">
              <label htmlFor="name">Skill 5 </label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setSkill5(event.target.value);
                }}
              ></input>
              
            </div>

            {/* <hr />

            <div className="frm1">
              <label htmlFor="name">Key Skills </label>
              <input type="text" name="name"></input>
            </div> */}

            <hr />

            <div className="frm1" id="expC">
              <label htmlFor="name"> Experience </label>
              <input
                type="number"
                name="name"
                placeholder="Low Range"
                className={LowExperienceError ? "red-border" : ""}
                id="expC1"
                onChange={(event) => {
                  setLowExperience(event.target.value);
                }}
              ></input>
              <input
                type="number"
                name="name"
                placeholder="High Range"
                className={HighExperienceError ? "red-border" : ""}
                id="expC2"
                onChange={(event) => {
                  setHighExperience(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <br />
            <br />

            <hr />

            <div className="frm1">
              <label htmlFor="posC">India/Abroad </label>
              <select
                name="company"
                id="posC"
                className={IndiaAbroadError ? "red-border" : ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="" disabled selected>
                  Select option
                </option>
                <option value="India">India</option>
                <option value="Abroad">Abroad</option>
              </select>
              {IndiaAbroadError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div>
              <div className="frm1" id="expC">
                <label htmlFor="posC">Country </label>
                <div id="hhh">
                  <select
                    className={CountryError ? "red-border" : ""}
                    onChange={(e) => handleCountry(e, e.target.value)}
                    id="cntryC"
                  >
                    <option value="">Select Country</option>
                    {country.map((items) => (
                      <option key={items} value={getCountry}>
                        {items}
                      </option>
                    ))}
                  </select>
                  {CountryError ? (
                    <div className="error">Please enter a value</div>
                  ) : null}
                </div>
              </div>

              <hr />

              {/* <div className="frm1" id="expC">
                <label htmlFor="posC">State </label>
                <div id="hhh">
                  <select
                    className={StateError ? "red-border" : ""}
                    onChange={(e) => handleState(e, e.target.value)}
                    id="cntryC2"
                  >
                    <option value="">Select State</option>
                    {getState.map((items) => (
                      <option key={items} value={selectedState}>
                        {items}
                      </option>
                    ))}
                  </select>
                  {StateError ? (
                    <div className="error">Please enter a value</div>
                  ) : null}
                </div>
              </div> */}

              {/* <div className="frm" id="exp">
                <label htmlFor="pos">City </label>
                <select id="cntry3">
                  <option value="">Select City</option>
                  {cities.map((items) => (
                    <option key={items.name}>{items.name}</option>
                  ))}
                </select>
              </div> */}

              <div className="frm1">
                <label htmlFor="name">Location </label>
                <input
                  type="text"
                  name="name"
                  className={StateError ? "red-border" : ""}
                  required="required"
                  onChange={(event) => {
                    setState1(event.target.value);
                  }}
                ></input>
                {StateError ? (
                  <div className="error">Please enter a value</div>
                ) : null}

              </div>
            </div>

            <hr />

            <div className="frm1" id="expC">
              <label htmlFor="name" id="curr">
                {" "}
                Salary({lakhK})
              </label>
              <input
                type="number"
                name="name"
                placeholder="Low Range"
                className={lowSalaryError ? "red-border" : ""}
                id="salC1"
                onChange={(event) => {
                  setlowSalary(event.target.value);
                }}
              ></input>
              <input
                type="number"
                name="name"
                placeholder="High Range"
                className={highSalaryError ? "red-border" : ""}
                id="salC2"
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
                value={category}
                readonly="readonly"
                id="catin"
                disabled="disabled"
              ></input>
            </div>

            <hr />
          </div>

          {/* EntryForm 2 */}

          <div className="EntryFormC2">
            <hr />
            <div className="frm1">
              <label htmlFor="name">Joining Time </label>
              <select
                name="company"
                id="posC"
                className={JoiningTimeError ? "red-border" : ""}
                onChange={(event) => {
                  setJoiningTime(event.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select option
                </option>
                <option value="15 days">15 days</option>
                <option value="30 days">30 days</option>
                <option value="45 days">45 days</option>
                <option value="60 days">60 days</option>
              </select>
              {JoiningTimeError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div className="frm1">
              <label htmlFor="posC">Priority </label>
              <select
                name="company"
                id="posC"
                className={PriorityError ? "red-border" : ""}
                onChange={(event) => {
                  setPriority(event.target.value);
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
              {PriorityError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div className="frm1">
              <label htmlFor="name">No of positions </label>
              <input
                type="number"
                name="name"
                className={PositionError ? "red-border" : ""}
                required="required"
                onChange={(event) => {
                  setNOP(event.target.value);
                }}
              ></input>
              {PositionError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <br />
            <br />

            <hr />

            <div className="frm1">
              <label htmlFor="name">MS Representative </label>
              <select
                name=""
                id="posC"
                className={MSrepError ? "red-border" : ""}
                onChange={(event) => {
                  setMSrep(event.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select option
                </option>
                {MSList.map((val, key) => {
                  return <option value={val.username}>{val.username}</option>;
                })}
              </select>
              {MSrepError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            <div className="frm1">
              <label htmlFor="name">Link of JD </label>
              <input
                type="text"
                name="name"
                className={LinkJDError ? "red-border" : ""}
                onChange={(event) => {
                  setLinkJD(event.target.value);
                }}
              ></input>
              {LinkJDError ? (
                <div className="error">Please enter a value</div>
              ) : null}
            </div>

            <hr />

            {/* <br /> */}
            {/* <br /> */}
            {/* <br /> */}

            <div className="tg">
              <hr />
              <div className="frm1" id="tc">
                <label htmlFor="name">Target Companies </label>
                <textarea
                  type="text"
                  name="name"
                  rows={12}
                  columns={40}
                  id="tx"
                  className={TargetCompError ? "red-border" : ""}
                  onChange={(event) => {
                    setTargetComp(event.target.value);
                  }}
                ></textarea>
                {TargetCompError ? (
                  <div className="error">Please enter a value</div>
                ) : null}
              </div>

              <hr />

              <div className="frm1" id="er1">
                <label htmlFor="posC">Educational Requirement </label>
                <select
                  name="company"
                  id="posC"
                  className={EdReqError ? "red-border" : ""}
                  onChange={(event) => {
                    setEdReq(event.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select option
                  </option>
                  <option value="B-Tech">B-Tech</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="BBA">BBA</option>
                  <option value="MBA">MBA</option>
                </select>
                {EdReqError ? (
                  <div className="error">Please enter a value</div>
                ) : null}
              </div>
            </div>

            <hr />

            <br />
            <br />
            <br />

            <div className="cg">
              <hr />
              {/*<div className="frm1">
                <label htmlFor="name">Criterion Missing </label>
                <input type="text" name="name"></input>
              </div>

              
              <hr />

              <div className="frm1">
                <label htmlFor="name">Criterion Met </label>
                <input type="text" name="name"></input>
              </div> */}

              <div className="frm1">
                <label htmlFor="name">Job Board Link</label>
                <input
                  type="text"
                  name="name"
                  className={JBlinkError ? "red-border" : ""}
                  onChange={(event) => {
                    setJBlink(event.target.value);
                  }}
                ></input>
                {JBlinkError ? (
                  <div className="error">Please enter a value</div>
                ) : null}
              </div>
              <hr />

              <div className="frm1" id="tc">
                <label htmlFor="name">Recruiter Notes </label>
                <textarea
                  type="text"
                  name="name"
                  rows={12}
                  columns={40}
                  id="tx"
                  className={ExNotError ? "red-border" : ""}
                  onChange={(event) => {
                    setExNot(event.target.value);
                  }}
                ></textarea>
                {ExNotError ? (
                  <div className="error">Please enter a value</div>
                ) : null}
              </div>

              <br />
              <br />
              <hr />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
