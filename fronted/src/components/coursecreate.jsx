// import React from 'react';
// import courseImage1 from "../images/v2_95.png";
// import courseImage2 from "../images/scro.png";
// import { Link } from 'react-router-dom'; 

// const Coursecreate = () => {
//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         {/* Sidebar header with background image */}
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "10px",
//               display: "inline-block",
//               borderRadius: "18px",
//               width: "140px",
//               height: "40px",
//               marginTop: "-10px",
//               marginLeft: "-10px",
//             }}
//           ></div>
//           <img
//             src={courseImage1}
//             alt="Background"
//             style={{
//               width: "130px",
//               height: "30px",
//               marginTop: "-5px",
//               marginLeft: "-134px",
//             }}
//           />
//         </div>

//         {/* Teacher profile section */}
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "10px",
//               display: "inline-block",
//               borderRadius: "50%",
//               width: "90px",
//               height: "90px",
//               marginTop: "90px",
//               marginLeft: "-30px",
//             }}
//           ></div>
//           <img
//             src={courseImage2}
//             alt="Teacher Profile"
//             style={{
//               width: "90px",
//               height: "90px",
//               marginTop: "70px",
//               marginLeft: "-90px",
//             }}
//           />
//         </div>

//         {/* Teacher's name and navigation links */}
//         <h2>Fatima</h2>
//         <ul style={{ paddingLeft: "0" }}>
//           <li>
//             <Link to="/coursecreate" className="cstylil1">Courses</Link>
//           </li>
//           <li>
//             <Link to="/students" className="cstylil">Students</Link>
//           </li>
//           <li>
//             <Link to="/settings" className="cstylil">Settings</Link>
//           </li>
//           <li>
//             <Link to="/logout" className="cstylil">Logout</Link>
//           </li>
//         </ul>
//       </aside>
//     </div>
//     // 
//     <div className="course-container"> <div className="form-section"> <h2>Create Courses</h2> <form> <div className="form-group"> <label htmlFor="name">Name</label> <input type="text" id="name" name="name" /> </div> <div className="form-group"> <label htmlFor="search">Search</label> <input type="text" id="search" name="search" /> </div> <div className="form-group"> <label htmlFor="detail">Detail</label> <textarea id="detail" name="detail"></textarea> </div> <button type="submit">Submit</button> </form> </div> <div className="image-section"> <img src={courseImage} alt="Web Development Illustration" /> </div> </div>
//   );
// };

// export default Coursecreate;






// 
import React from 'react';
import courseImage1 from "../images/v2_95.png";
import courseImage2 from "../images/scro.png";
import { Link } from 'react-router-dom'; 
import courseImage3 from "../images/laptop.png";  // Import the image used in the course creation section

const Coursecreate = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        {/* Sidebar header with background image */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              display: "inline-block",
              borderRadius: "18px",
              width: "140px",
              height: "40px",
              marginTop: "-10px",
              marginLeft: "-10px",
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

        {/* Teacher profile section */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              display: "inline-block",
              borderRadius: "50%",
              width: "90px",
              height: "90px",
              marginTop: "90px",
              marginLeft: "-30px",
            }}
          ></div>
          <img
            src={courseImage2}
            alt="Teacher Profile"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "70px",
              marginLeft: "-90px",
            }}
          />
        </div>

        {/* Teacher's name and navigation links */}
        <h2>Fatima</h2>
        <ul style={{ paddingLeft: "0" }}>
          <li>
            <Link to="/coursecreate" className="cstylil1">Courses</Link>
          </li>
          <li>
            <Link to="/students" className="cstylil">Students</Link>
          </li>
          <li>
            <Link to="/settings" className="cstylil">Settings</Link>
          </li>
          <li>
            <Link to="/logout" className="cstylil">Logout</Link>
          </li>
        </ul>
      </aside>
      <style>
    {`
      input,textarea::placeholder {
        color: rgba(153, 202, 60, 1);
         } `}
  </style>
  <style>
    {`
      input::placeholder {
        color: rgba(153, 202, 60, 1);
         } `}
  </style>
      {/* Course creation section */}
      <div className="course-container">
        <div className="form-section">
          <h2>Create Courses</h2>
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder='Name' className='hy1' />
              <input type="text" id="search" name="search" placeholder='Email' className='input2' />
              <textarea id="detail" name="detail" placeholder='Detail' className='input3'></textarea>
            </div>
            <button type="submit" className='button1'>Submit</button>
          </form>
        </div>
        <div className="image-section">
          <img src={courseImage3} alt="Web Development Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Coursecreate;
