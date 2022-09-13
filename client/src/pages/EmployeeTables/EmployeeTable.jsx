import Navbar from "../../Components/Navbar/Navbar";
import "./EmployeeTable.scss";
import EmployeeTable from "../../Components/EmployeeTable/EmployeeTable";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Employee Tables</div>
          <br />
          <hr />
          <EmployeeTable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit