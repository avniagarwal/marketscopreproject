import Navbar from "../../Components/Navbar/Navbar";
import "./EditDelEmployee.scss";
import EditDelEmployee from "../../Components/EditDelEmployee/EditDelEmployee";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Edit/Delete Employee</div>
          <br />
          <hr />
          <EditDelEmployee/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit