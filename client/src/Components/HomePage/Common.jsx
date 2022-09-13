import React from "react";
import web from "../Images/img3.svg";
import { NavLink } from "react-router-dom";

const Common = () => {
  return (
    <>
       <section id="header" className="d-flex align-items-center mt-3">
      <div className='container-fluid nav bg'>
        <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1><strong className="brand-name">About Us</strong>  </h1>
                    
                    <p className="my-3">We believe in building long term partnerships with all our clients, because we understand the importance of individual growth. That's why we provide services ranging from career mentoring for school students, to recruitment of professionals with 35+ years of experience. Mentoring students and professionals became a natural corollary to our recruitment services over the years.</p>
                    
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

export default Common;