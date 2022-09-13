import Navbar from "../../Components/Navbar/Navbar";
import "./AddEmployee.scss";
import AddEmployee from "../../Components/Add Employee/AddEmployee";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Add Employee</div>
          <br />
          <hr />
          <AddEmployee/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit