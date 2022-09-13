import Navbar from "../../Components/Navbar/Navbar";
import "./AddCompany.scss";
import AddCompany from "../../Components/Add Company/AddCompany";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Add Company</div>
          <br />
          <hr />
          <AddCompany/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit