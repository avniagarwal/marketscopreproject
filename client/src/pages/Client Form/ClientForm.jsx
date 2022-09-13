import Navbar from "../../Components/Navbar/Navbar";
import "./ClientForm.scss";
import Client from "../../Components/ClientForm/Client";
import SidebarTL from "../../Components/SidebarTL/SidebarTL";

const ClientForm = () => {
  return (
    <>
      <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="Client-Form " >Job Profile Entry</div>
          <br />
          <hr />
          <Client />
        </div>
      </div>
    </div>
    </>
  )
}

export default ClientForm