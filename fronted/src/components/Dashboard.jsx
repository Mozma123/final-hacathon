
// veryimp
import React from 'react';
// import './dashboard.css';
import courseImage from '../images/course .png';
import courseImage1 from "../images/v2_95.png"
import courseImage2 from "../images/scro.png"
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
{/*  */}
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              display: "inline-block",
              borderRadius: "5px",
              width: "140px",
              height: "40px",
              borderRadius: "18px",
              marginTop: "-10px",
              marginLeft:"-10px",
            }}
          ></div>
          <img
            src={courseImage1}
            alt="Background"
            style={{
              width: "130px",
              height: "30px",
              marginTop: "-5px",
              marginLeft: "-134px",
            }}
          />
        </div>
        {/* 2 for teacher profile  */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              display: "inline-block",
              borderRadius: "5px",
              width: "90px",
              height: "90px",
              borderRadius: "50px",
              marginTop: "90px",
              marginLeft:"-30px",
            }}
          ></div>
          <img
            src={courseImage2}
            alt="Background"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "70px",
              marginLeft: "-90px",
            }}
          />
        </div>
{/*  */}
        <h2>Fatima</h2>
        <ul>
          {/* <li>Courses</li>
          <li>Students</li>
          <li>Settings</li>
          <li>Logout</li> */}
            {/* <li>Courses</li> */}
            <Link to="/coursecreate" className='cstylil1' >Courses</Link> 
          <Link to="/settingpage" className='cstylil'>Students </Link>
          <Link to ="/settingpage" className='cstylil'>Settings</Link>
          <Link to="/" className='cstylil'>Logout</Link>
        </ul>
      </aside>
      <main className="main-section">
        <header>
          <h1>My Courses</h1>
          <input type="text" placeholder="Search"  className='search'/>
          <button>+</button>
        </header>
        <div className="courses">
          {Array(3).fill(
            <div className="course-card">
              <img src={courseImage} alt="Web Development" />
              <h2>Web Development</h2>
              <p>Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, Extract, Transform, Load, Microsoft<br/> Excel, Power BI, SQL. </p>
            </div>
          )}
        </div>
        <div className="courses">
          {Array(3).fill(
            <div className="course-card">
              <img src={courseImage} alt="Web Development" />
              <h2>Web Development</h2>
              <p>Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, Extract, Transform, Load, Microsoft<br/> Excel, Power BI, SQL. </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;





