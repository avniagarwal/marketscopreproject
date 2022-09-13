import React from "react";
import web from "../Images/img2.svg";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
      <section id="header" className="d-flex align-items-center mt-4">
      <div className='container-fluid nav bg'>
        <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1><strong className="brand-name">35+ years</strong>  </h1>
                    <h2 className="my-3">
                    We maintain the idea of being along with our clients and providing guidance throughout their career journey
                    </h2>
                    <div className="mt-3">
                        <NavLink to="/login" className="btn-get-started">Get Started</NavLink>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src = {web} className="img-fluid animated"  alt="home img"/>
                </div>
                </div>
            </div>
        </div>
     </div>
      </section>
    </>
  );
};

export default Home;
