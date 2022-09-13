import Navbar from "../../Components/Navbar/Navbar";
import "./BackTable.scss";
import BackendTable from "../../Components/BackendTables/BackendTable";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Backend Tables</div>
          <br />
          <hr />
          <BackendTable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit