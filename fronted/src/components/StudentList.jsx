// //  very imp 
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AllStudents = () => {
//   const [students, setStudents] = useState([]);
//   const [editStudent, setEditStudent] = useState(null); // For tracking student to be updated
//   const [updatedName, setUpdatedName] = useState("");
//   const [updatedCourse, setUpdatedCourse] = useState("");
//   const [updatedImg, setUpdatedImg] = useState("");

//   // Gallery of images (use relative paths from the public folder)
//   const imageGallery = [
//     "/images/course .png", // Image 1 in public/images folder
//     // "/images/image2.jpg", // Image 2 in public/images folder
//     // "/images/image3.jpg", // Image 3 in public/images folder
//     // "/images/image4.jpg", // Image 4 in public/images folder
//     // "/images/image5.jpg", // Image 5 in public/images folder
//   ];

//   // Fetch data from backend
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/students")
//       .then((response) => setStudents(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Handle update button click
//   const handleUpdateClick = (student) => {
//     setEditStudent(student);
//     setUpdatedName(student.name);
//     setUpdatedCourse(student.course);
//     setUpdatedImg(student.img);
//   };

//   // Handle form submission for update
//   const handleUpdateSubmit = (id) => {
//     const updatedStudentData = {
//       name: updatedName,
//       course: updatedCourse,
//       img: updatedImg,
//     };

//     axios
//       .put(`http://localhost:3001/students/${id}`, updatedStudentData)
//       .then((response) => {
//         // Update the student list with the updated student data
//         setStudents(
//           students.map((student) =>
//             student._id === id ? response.data : student
//           )
//         );
//         setEditStudent(null); // Close the edit form
//       })
//       .catch((error) => console.error(error));
//   };

//   // Handle delete button click
//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:3001/students/${id}`)
//       .then(() => setStudents(students.filter((student) => student._id !== id)))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div className="students-container">
//       <h1>All Students</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Course</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={student._id}>
//               <td>{index + 1}</td>
//               <td>{student.name}</td>
//               <td>{student.course}</td>
//               <td>
//                 <img
//                   src={student.img}
//                   alt="Student"
//                   style={{ width: "50px" }}
//                 />
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(student._id)}>Delete</button>
//                 <button onClick={() => handleUpdateClick(student)}>Update</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Update Form (appears when edit button is clicked) */}
//       {editStudent && (
//         <div className="update-form">
//           <h2>Update Student</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleUpdateSubmit(editStudent._id);
//             }}
//           >
//             <div>
//               <label>Name</label>
//               <input
//                 type="text"
//                 value={updatedName}
//                 onChange={(e) => setUpdatedName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label>Course</label>
//               <input
//                 type="text"
//                 value={updatedCourse}
//                 onChange={(e) => setUpdatedCourse(e.target.value)}
//               />
//             </div>
//             <div>
//               <label>Image</label>
//               {/* Gallery for image selection */}
//               <div>
//                 <label>Select an image</label>
//                 <div className="image-gallery">
//                   {imageGallery.map((imgUrl, index) => (
//                     <img
//                       key={index}
//                       src={imgUrl}
//                       alt={`Gallery image ${index + 1}`}
//                       style={{
//                         width: "50px",
//                         marginRight: "10px",
//                         cursor: "pointer",
//                         border: updatedImg === imgUrl ? "2px solid blue" : "none",
//                       }}
//                       onClick={() => setUpdatedImg(imgUrl)} // Set selected image URL
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <button type="submit">Update</button>
//           </form>
//           <button onClick={() => setEditStudent(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllStudents;









// 2
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Ensure this import is present
import axios from "axios";
import courseImage1 from "../images/scro.png"
import courseImage2 from "../images/v2_95.png"

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedCourse, setUpdatedCourse] = useState("");
  const [updatedImg, setUpdatedImg] = useState("");

  const imageGallery = [
    "/images/course.png",
    "/images/hy.png",
    "/images/hy1.png",
    "/images/hy2.png",
    "/images/hy3.png",
    "/images/hy4.png"
]; // Adjust path as needed

  useEffect(() => {
    axios
      .get("http://localhost:3001/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleUpdateClick = (student) => {
    setEditStudent(student);
    setUpdatedName(student.name);
    setUpdatedCourse(student.course);
    setUpdatedImg(student.img);
  };

  const handleUpdateSubmit = (id) => {
    const updatedStudentData = {
      name: updatedName,
      course: updatedCourse,
      img: updatedImg,
    };

    axios
      .put(`http://localhost:3001/students/${id}`, updatedStudentData)
      .then((response) => {
        setStudents(
          students.map((student) =>
            student._id === id ? response.data : student
          )
        );
        setEditStudent(null);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/students/${id}`)
      .then(() => setStudents(students.filter((student) => student._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ display: "flex" }}>
      <aside className="sidebar">
        {/* Sidebar with profile image and links */}
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
          />
         {/* img */}
         <img
            src={courseImage2}
            alt="Background"
            style={{
              width: "130px",
              height: "30px",
              marginTop: "-5px",
              marginLeft: "-134px",
            }}
          />
        </div>

        {/* Profile image */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              display: "inline-block",
              borderRadius: "50px",
              width: "90px",
              height: "90px",
              marginTop: "90px",
              marginLeft: "-30px",
            }}
          />
          {/* <img
            src="/images/courseImage2.png"
            alt="Profile"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "70px",
              marginLeft: "-90px",
            }}
          /> */}
             <img
            src={courseImage1}
            alt="Profile"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "70px",
              marginLeft: "-90px",
            }}
          />
        </div>

        <h2>Fatima</h2>
        <ul>
          <Link to="/coursecreate" className="cstylil1">Courses</Link>
          <Link to="/coursecreate" className="cstylil">Students</Link>
          <Link to="/" className="cstylil">Settings</Link>
          <Link to="/" className="cstylil">Logout</Link>
        </ul>
      </aside>

      <div className="students-container" style={{ flexGrow: 1, padding: "20px" }}>
        <h1  className="all-student">All Students</h1>
        <table>
          <thead>
            <tr>
            
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <img
                    src={student.img}
                    alt="Student"
                    style={{ width: "50px" }}
                  />
                </td>
                <td>
                <button onClick={() => handleUpdateClick(student)} className="update1">Update</button>
                  <button onClick={() => handleDelete(student._id)} className="delete1">Delete</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editStudent && (
          <div className="update-form">
            <h2>Update Student</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateSubmit(editStudent._id);
              }}
            >
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </div>
              <div>
                <label>Course</label>
                <input
                  type="text"
                  value={updatedCourse}
                  onChange={(e) => setUpdatedCourse(e.target.value)}
                />
              </div>
              <div>
                <label>Image</label>
                <div className="image-gallery">
                  {imageGallery.map((imgUrl, index) => (
                    <img
                      key={index}
                      src={imgUrl}
                      alt={`Gallery image ${index + 1}`}
                      style={{
                        width: "50px",
                        marginRight: "10px",
                        cursor: "pointer",
                        border: updatedImg === imgUrl ? "2px solid blue" : "none",
                      }}
                      onClick={() => setUpdatedImg(imgUrl)}
                    />
                  ))}
                </div>
              </div>
              <button type="submit" >Update</button>
            </form>
            <button onClick={() => setEditStudent(null)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllStudents;
