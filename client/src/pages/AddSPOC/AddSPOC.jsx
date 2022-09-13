import Navbar from "../../Components/Navbar/Navbar";
import "./AddSPOC.scss";
import AddSPOC from "../../Components/Add SPOC/AddSPOC";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Add SPOC</div>
          <br />
          <hr />
          <AddSPOC/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit