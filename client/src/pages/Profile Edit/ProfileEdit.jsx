import Navbar from "../../Components/Navbar/Navbar";
import "./ProfileEdit.scss";
import Edit from "../../Components/EditForm/Edit";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ProfileEdit = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        
        <div className="listContainer">
          <div className="Client-Form ">Job Profile Edit</div>
          <br />
          <hr />
          <Edit />
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileEdit