import DashboardTL from "./pages/DashboardTL/DashboardTL";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardRecruiter from "./pages/DashboardRecruiter/DashboardRecruiter";
import DashboardSL from "./pages/DashboardSL/DashboardSL";
import MasterRecruiterForm from "./pages/MasterRecruiterForm/MasterRecruiterForm";
import FirePositions from "./pages/FirePositions/FirePositions";
import TasksheetTL from "./pages/Tasksheet/TasksheetTL";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/HomePage/Home"
import About from "./Components/HomePage/About";
import Services from "./Components/HomePage/Service";
import Contact from "./Components/HomePage/Contact";
import Navbar from "./Components/HomePage/Navbar";
import Register from "./Components/register/Register";
import Login from "./Components/login/Login";
import ChangePriority from "./pages/Change Priority/ChangePriority";
import ProfileEdit from "./pages/Profile Edit/ProfileEdit";
import ClientForm from "./pages/Client Form/ClientForm";
import Profile from "./pages/Profile/Profile";
import CompanyTable from "./pages/CompanyTables/CompTable";
import SPOCTable from "./pages/SPOCTables/SPOCTable";
import EmployeeTable from "./pages/EmployeeTables/EmployeeTable";
import PositionsTable from "./pages/Positions Table/PositionsTable"
import BackTable from "./pages/BackendTables/BackTable";
import AddCompany from "./pages/AddCompany/AddCompany";
import EditDelComp from "./pages/EditDelComp/EditDelComp";
import AddSPOC from "./pages/AddSPOC/AddSPOC";
import EditDelSPOC from "./pages/EditDelSPOC/EditDelSPOC";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import EditDelEmployee from "./pages/EditDelEmployee/EditDelEmployee";


function App() {
  const [user, setLoginUser] = useState({})

  // var nav = <Navbar />;

  // if (window.location.href.includes("/dashboard"))
  //   nav = <></>;
  // else
  //   nav = <Navbar />;

  // var d = <Login setLoginUser={setLoginUser} />;

  // if (user && user._id) {
  //   d = <DashboardTL setLoginUser={setLoginUser} />;
  // } else {
  //   d = <Login setLoginUser={setLoginUser} />;
  // }

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/dashboardTL" exact element={<DashboardTL/>} />

        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
          <Route path="/dashboardTL" element={<DashboardTL/>} />
          <Route path="/dashboardRecruiter" element={<DashboardRecruiter/>} />
          <Route path="/dashboardSL" element={<DashboardSL/>} />
          <Route path="/master_recruiter_form" element={<MasterRecruiterForm/>} />
          <Route path="/firepositions" element={<FirePositions/>} />
          <Route path="/tasksheetTL" element={<TasksheetTL/>}/>
          <Route path="/client" element={<ClientForm />} />
          <Route path="/edit" element={<ProfileEdit />} />
          <Route path="/mass" element={<ChangePriority />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/companytable" element={<CompanyTable />} />
          <Route path="/spoctable" element={<SPOCTable />} />
          <Route path="/backendtables" element={<BackTable />} />
          <Route path="/addcompany" element={<AddCompany />} />
          <Route path="/editdelcomp" element={<EditDelComp />} />
          <Route path="/addspoc" element={<AddSPOC />} />
          <Route path="/editdelspoc" element={<EditDelSPOC />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/editdelemployee" element={<EditDelEmployee />} />
          <Route path="/employeetable" element={<EmployeeTable />} />
          <Route path="/positionstable" element={<PositionsTable/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
