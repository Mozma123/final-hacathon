import React from "react";
import courseImage from "../images/2  (2).png";
import image1  from "../images/v2_95.png";
import courseImage1 from "../images/course .png"
import Contact from "./contact";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              display: "inline-block",
              borderRadius: "5px",
              width: "140px",
              height: "30px",
              borderRadius: "18px",
              marginTop: "-19px",
            }}
          ></div>
          <img
            src={image1}
            alt="Background"
            style={{
              width: "130px",
              height: "30px",
              marginTop: "-10px",
              marginLeft: "-134px",
            }}
          />
        </div>

        <nav>
          <ul
           className="nav-links"
           >
            <li  >
              <Link to="/coursecreate" 
            > Courses</Link>
              </li>
            {/* <li>Blog</li> */}
            <li>
              <Link to="/contact">
              Contact
              </Link>
              </li>
            {/* <li>
              <button className="register-btn1">Register</button>
            </li> */}
             <Link to="/type">
                <button className="register-btn1">Register</button>
            </Link>
            {/* <li>
              <button className="login-btn1">Login</button>
            </li> */}
            <Link to="/loginform">
            <button className="login-btn1">Login</button>
            </Link>
            {/* C:\Users\Administrator\salyni test online\fronted\src\components\teacherregister.jsx */}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="v6_9"></div>
      <section className="hero">
        <div className="hero-text">
          <h1 className="intro">Learn without </h1>
          <span>
            <h1 style={{ 
              color: "#84B54C", 
              marginTop : "-10px",
            }}

            >limits </h1>
          </span>
          <p style={{ color: "#385FBE" }}>
            Start, switch, or advance your career with
            <br /> more than 7,000 courses, Professional
          </p>
          <p style={{ color: "#385FBE" }}>
            Certificates, and degrees from world-class <br />
            universities and companies.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </section>

      {/* Register Section */}
      <section className="register-section">
        <div className="register-content">
          <h1 className="gradient-text">
            Start learning with
            <br /> free courses
          </h1>
          <p style={{ color: "rgb(0,48,179)" }}>Explore free online courses.</p>
        </div>

        {/* Cards Section */}
       
        <div className="cards-container">
        {/* <Link to="/enrollcourse" key={index} className="card-link"> */}
          {[1, 2, 3].map((_, index) => (
            //  <Link to="/enrollcourse" key={index} className="card-link">
            <div key={index} className="card">
              <div className="card-image">
                <img src={courseImage1} alt="Course Preview" />
              </div>
              <div className="card-content">
                <h3 className="course-title">
                  <Link  to="/enrollcourse" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Web Development
                  </Link>
                  </h3>
                <p className="course-description">
                  Data Analysis, Data Management, Data Mining, Data Model, Data
                  Visualization, Extract, Transform, Load, Microsoft Excel,
                  Power BI, SQL.
                </p>
                <p className="course-duration">
                  Beginner Professional Certificate 3–6 Months
                </p>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <div className="cards-container1">
        {[1].map((index) => (
          <div
            key={index}
            className="card1"
            style={{
              position: "relative",
              width: "1000px",
              height: "80px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "1000px",
                height: "80px",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, rgba(205, 235, 147, 0.9) -15.98%, rgba(200, 215, 255, 0.9) 84.02%)",
              }}
            >
              <p
                style={{
                  color: "rgba(0,0, 0, 1)",
                  fontWeight: "700",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Ready to Join ?
              </p>
              <h1
                style={{
                  color: " #2B5B91 ",
                  fontWeight: "700",
                  marginLeft: "20px",
                  marginTop: "-6px",
                  fontSize: "20px",
                }}
              >
                Register For Free Courses
              </h1>
              <button className="register-now-btn">
               <Link to="/enrollcourse">
                Register
                </Link>
                </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;



