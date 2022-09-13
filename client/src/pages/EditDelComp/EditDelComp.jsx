import Navbar from "../../Components/Navbar/Navbar";
import "./EditDelComp.scss";
import EditDelComp from "../../Components/EditDeleteComp/EditDelComp";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Edit/Delete Company</div>
          <br />
          <hr />
          <EditDelComp/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit