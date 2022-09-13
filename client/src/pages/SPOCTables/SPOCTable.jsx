import Navbar from "../../Components/Navbar/Navbar";
import "./SPOCTable.scss";
import SPOCTable from "../../Components/SPOCTables/SPOCTable";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">SPOC Table</div>
          <br />
          <hr />
          <SPOCTable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit