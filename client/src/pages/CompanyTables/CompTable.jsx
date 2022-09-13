import Navbar from "../../Components/Navbar/Navbar";
import "./CompTable.scss";
import CompanyTable from "../../Components/CompanyTables/CompanyTable";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Name Of Companies</div>
          <br />
          <hr />
          <CompanyTable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit