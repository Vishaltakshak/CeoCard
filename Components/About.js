import React from "react";
import "../css/about.css";
const About = () => {
  return (
    <>
      <div
        className="about-section redesign-home-about-section "
        // style={{
        //   backgroundImage: 'url("../assets/img/About/aboutus-new.jpg")',
        // }}
      >
        <div className="container">
          <div className="row">
            <div className="redesign-home-empty-column col-lg-4 col-md-4 col-sm-4"></div>
            <div className="redesign-home-right-text-about col-lg-8 col-md-8 col-sm-12 ">
              <div className="redesign-home-div-right-about">
                <div
                  className="redesign-home-sub-title"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  About Us
                </div>
                <p
                  className="redesign-home-half-paragraph txtparagraph"
                  style={{ marginBottom: "20px" }}
                >
                 CEO Card is an innovative platform designed to enhance the professional journey of today's most influential business leaders. We provide tailored resources to support their unique needs, recognizing the critical role executives play in driving organizational success.
                </p>
                <a
                  href="/enquiry"
                  className="redesign-home-btn-black btn btn-primary"
                  id="about-inquire-link"
                >
                  PREVIEW MEMBERSHIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
