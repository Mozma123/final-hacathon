// very ver imppppppppppppppp
// import React, { useState, useEffect } from "react";

// const EnrollCourse = () => {
//   const [courses, setCourses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     duration: "",
//     fee: "",
//     image: null,
//   });

//   // Fetch courses on component load
//   useEffect(() => {
//     fetch("http://localhost:3001/api/courses")
//       .then((response) => response.json())
//       .then((data) => setCourses(data))
//       .catch((err) => console.error("Error fetching courses:", err));
//   }, []);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if required fields are filled
//     if (!formData.title || !formData.description || !formData.duration || !formData.fee) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Create FormData object
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("duration", formData.duration);
//     data.append("fee", formData.fee);

//     // If there's an image, append it to the FormData
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       // Send POST request to the server with FormData
//       const response = await fetch("http://localhost:3001/api/courses", {
//         method: "POST",
//         body: data,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create course");
//       }

//       const newCourse = await response.json();
//       setCourses([...courses, newCourse]);
//       setShowForm(false);
//       setFormData({
//         title: "",
//         description: "",
//         duration: "",
//         fee: "",
//         image: null,
//       });
//     } catch (err) {
//       console.error("Error creating course:", err);
//       alert("Error creating course.");
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <h1 style={{marginTop : "10px", color : "red"}} className="enroll-namming">Course Enrollment</h1>
//         <button onClick={() => setShowForm(!showForm)}>Enroll for Free</button>
//       </nav>

//       {showForm && (
//         <form className="course-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Course Description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration (e.g., 6 weeks)"
//             value={formData.duration}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="fee"
//             placeholder="Fee (e.g., $100)"
//             value={formData.fee}
//             onChange={handleInputChange}
//             required
//           />
//           <input type="file" name="image" onChange={handleFileChange} />
//           <button type="submit">Submit</button>
//         </form>
//       )}

//       <div className="course-list">
//         {courses.map((course) => (
//           <div className="course-card" key={course._id}>
//             <img src={`http://localhost:3001${course.image}`} alt={course.title} />
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//             <p><strong>Duration:</strong> {course.duration}</p>
//             <p><strong>Fee:</strong> {course.fee}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EnrollCourse;





//2 
// import React, { useState, useEffect } from "react";
// import courseImage1 from "../images/course .png";

// const EnrollCourse = () => {
//   const [courses, setCourses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     duration: "",
//     fee: "",
//     image: null,
//   });

//   // Fetch courses on component load
//   useEffect(() => {
//     fetch("http://localhost:3001/api/courses")
//       .then((response) => response.json())
//       .then((data) => setCourses(data))
//       .catch((err) => console.error("Error fetching courses:", err));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.description || !formData.duration || !formData.fee) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("duration", formData.duration);
//     data.append("fee", formData.fee);
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       const response = await fetch("http://localhost:3001/api/courses", {
//         method: "POST",
//         body: data,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create course");
//       }

//       const newCourse = await response.json();
//       setCourses([...courses, newCourse]);
//       setShowForm(false);
//       setFormData({
//         title: "",
//         description: "",
//         duration: "",
//         fee: "",
//         image: null,
//       });
//     } catch (err) {
//       console.error("Error creating course:", err);
//       alert("Error creating course.");
//     }
//   };

//   return (
//     <div>
//       <div
//         className="enroll-section"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           margin: "20px",
//           padding: "20px",
//         //   border: "1px solid #ddd",
//           borderRadius: "8px",
//         //   backgroundColor: "#f9f9f9",
//         }}
//       >
//         {/* Course Detail Text Above Image */}
//         {/* <div style={{ textAlign: "center", marginBottom: "10px" }}> */}
//           <h2
//             style={{
//               fontSize: "1.5rem",
//               color: "#333",
//             //   borderBottom: "2px solid #ddd",
//             //   paddingBottom: "10px",
//             //   marginBottom: "20px",
//             }}
//           >
//             Course Detail
//           </h2>
//         {/* </div> */}

//         {/* Line separating text from image */}
//         <div
//           style={{
//             width: "760px",
//             // borderTop: "2px solid #ddd",
//             marginBottom: "20px",
//             color : " green",
//             borderTop: "2px solid blue", // Apply green color to the border
//           }}
//         ></div>

//         {/* Course Image */}
//         <img
//           src={courseImage1}
//           alt="Web Development"
//           style={{
//             maxWidth: "300px",
//             marginLeft : "-420px",
//             height: "auto",
//             borderRadius: "8px",
//             objectFit: "cover",
//           }}
//         />

//         {/* Course Information */}
//         <div style={{ maxWidth: "50%", paddingLeft: "20px", textAlign: "center" }}>
//           <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "10px"  , marginLeft : "120px",
//           marginTop : '-300px',

//         }}>     Web Development </h1>
//           <p style={{ fontSize: "1rem", color: "#666", marginBottom: "20px" , marginLeft : "150px"}}>
//             Learn the skills you need to become a web developer in this comprehensive course.
//             Learn the skills you need to become a web developer in this comprehensive course.
//           </p>
//           <button className="envoll"
//             onClick={() => setShowForm(!showForm)}
//           >
//             Enroll for Free
//           </button>
//         </div>
//       </div>

//       {showForm && (
//         <form className="course-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Course Description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration (e.g., 6 weeks)"
//             value={formData.duration}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="fee"
//             placeholder="Fee (e.g., $100)"
//             value={formData.fee}
//             onChange={handleInputChange}
//             required
//           />
//           <input type="file" name="image" onChange={handleFileChange} />
//           <button type="submit">Submit</button>
//         </form>
//       )}

//       <div className="course-list">
//         {courses.map((course) => (
//           <div className="course-card" key={course._id}>
//             <img
//               src={`http://localhost:3001${course.image}`}
//               alt={course.title}
//             />
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//             <p>
//               <strong>Duration:</strong> {course.duration}
//             </p>
//             <p>
//               <strong>Fee:</strong> {course.fee}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EnrollCourse;



// /3
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Don't forget to import Link for routing
import courseImage1 from "../images/course .png"; // Corrected the image import
import courseImage2 from "../images/v2_95.png"

const EnrollCourse = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    fee: "",
    image: null,
  });

  // Fetch courses on component load
  useEffect(() => {
    fetch("http://localhost:3001/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.duration || !formData.fee) {
      alert("Please fill in all required fields.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("duration", formData.duration);
    data.append("fee", formData.fee);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await fetch("http://localhost:3001/api/courses", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      const newCourse = await response.json();
      setCourses([...courses, newCourse]);
      setShowForm(false);
      setFormData({
        title: "",
        description: "",
        duration: "",
        fee: "",
        image: null,
      });
    } catch (err) {
      console.error("Error creating course:", err);
      alert("Error creating course.");
    }
  };

  return (
    <div>
      {/* Navbar Section */}
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
            src={courseImage2}
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
          <ul className="nav-links">
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
            <Link to="/type">
              <button className="register-btn1">Register</button>
            </Link>
            <li>
              <button className="login-btn1">Login</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Enroll Section */}
      <div
        className="enroll-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#333",
            marginLeft  :"-1100px "
          }}
        >
          Course Detail
        </h2>

        <div
          style={{
            width: "2240px",
            marginLeft : "-750px",
            marginBottom: "20px",
            color: "green",
            borderTop: "2px solid blue",
          }}
        ></div>

        <img
          src={courseImage1}
          alt="Web Development"
          style={{
            maxWidth: "300px",
            marginLeft: "-980px",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div style={{ maxWidth: "50%", paddingLeft: "20px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "3rem",
              color: "#333",
              marginBottom: "10px",
              marginLeft: "120px",
              marginTop: "-290px",
            }}
          >
            Web Development
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              marginBottom: "20px",
              marginLeft: "150px",
            }}
          >
            Learn the skills you need to become a web developer in this comprehensive course.
          </p>
          <button
            className="envoll"
            onClick={() => setShowForm(!showForm)}
          >
            Enroll for Free
          </button>
        </div>
      </div>

      {showForm && (
        <form className="course-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Course Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 6 weeks)"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="fee"
            placeholder="Fee (e.g., $100)"
            value={formData.fee}
            onChange={handleInputChange}
            required
          />
          <input type="file" name="image" onChange={handleFileChange} />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <img
              src={`http://localhost:3001${course.image}`}
              alt={course.title}
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Fee:</strong> {course.fee}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollCourse;


