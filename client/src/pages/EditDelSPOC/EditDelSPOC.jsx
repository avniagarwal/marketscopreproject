import Navbar from "../../Components/Navbar/Navbar";
import "./EditDelSPOC.scss";
import EditDelSPOC from "../../Components/EditDelSPOC/EditDelSPOC";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Edit/Delete SPOC</div>
          <br />
          <hr />
          <EditDelSPOC/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit