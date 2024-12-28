


// // for one user kyliye
// // 2
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import image from "../images/scro.png"
// // import image1 from "../images/logo3.png"

// const Setting = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//   });

//   // Fetch user data from the backend when the component loads
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/user") // Updated API URL
//       .then((response) => {
//         setFormData(response.data);
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   // Handle input field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/user", formData) // Updated API URL
//       .then((response) => {
//         alert("Settings saved successfully!");
//       })
//       .catch((error) => console.error("Error saving settings:", error));
//   };

//   // Handle cancel action (reset form data)
//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       email: "",
//       role: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="settings-page">
//       <div className="sidebar">
      
//         <div className="profile">
//           {/* <img src="/profile.jpg" alt="Profile" /> */}
         
//           <img
//           src={image}
//           alt="Profile"   />
//           <h3>Fatima</h3>
//         </div>
//         <ul>
//           <li>Courses</li>
//           <li>Students</li>
//           <li className="active">Settings</li>
//           <li>Logout</li>
//         </ul>
//       </div>

//       <div className="settings-form-container">
//         <h1>Setting</h1>
//         <div className="form-wrapper">
//           {/* <img src="/profile.jpg" alt="Profile" className="profile-pic" /> */}
//           <img
//           src={image}
//           alt="Profile" 
//           className="profile-pic" 
//            />
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               // placeholder="Role"
//               placeholder="Student"


//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//             />
//             <div className="button-group">
//               <button type="button" onClick={handleCancel} className="button-cancle">Cancel</button>
//               <button type="submit"   className="button-submit">Save</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setting;




// 2
// for multiple user kyliye
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import "./Setting.css";

// const Setting = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//   });

//   // Fetch all users from the backend when the component loads
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/user") // Updated API URL for multiple users
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   // Handle input field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedUser) {
//       // If a user is selected, update the user's data
//       axios
//         .put(`http://localhost:3001/user/${selectedUser._id}`, formData) // Updated API URL with user ID for update
//         .then((response) => {
//           alert("Settings updated successfully!");
//           fetchUsers(); // Refresh users list after update
//         })
//         .catch((error) => console.error("Error saving settings:", error));
//     } else {
//       // Create a new user if no user is selected
//       axios
//         .post("http://localhost:3001/user", formData) // Updated API URL for creating a user
//         .then((response) => {
//           alert("User saved successfully!");
//           fetchUsers(); // Refresh users list after saving
//         })
//         .catch((error) => console.error("Error saving user:", error));
//     }
//   };

//   // Handle cancel action (reset form data)
//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       email: "",
//       role: "",
//       password: "",
//     });
//     setSelectedUser(null); // Deselect user when canceling
//   };

//   // Select a user for editing
//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       password: user.password,
//     });
//   };

//   // Fetch users after adding or updating
//   const fetchUsers = () => {
//     axios
//       .get("http://localhost:3001/user")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   };

//   return (
//     <div className="settings-page">
//       <div className="sidebar">
//         <div className="profile">
//           <img src="/profile.jpg" alt="Profile" />
//           <h3>Fatima</h3>
//         </div>
//         <ul>
//           <li>Courses</li>
//           <li>Students</li>
//           <li className="active">Settings</li>
//           <li>Logout</li>
//         </ul>
//       </div>

//       <div className="settings-form-container">
//         <h1>Setting</h1>
//         <div className="user-list">
//           <h2>Select a user to edit</h2>
//           <ul>
//             {users.map((user) => (
//               <li key={user._id} onClick={() => handleUserSelect(user)}>
//                 {user.name} ({user.role})
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="form-wrapper">
//           <h3>{selectedUser ? "Edit User" : "Create User"}</h3>
//           <img src="/profile.jpg" alt="Profile" className="profile-pic" />
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               placeholder="Role"
//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//             />
//             <div className="button-group">
//               <button type="button" onClick={handleCancel}>
//                 Cancel
//               </button>
//               <button type="submit">Save</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setting;

















// try styling
import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../images/scro.png";
import courseImage2 from "../images/scro.png";
import courseImage1 from "../images/v2_95.png";
import { Link } from 'react-router-dom';

const Setting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  // Fetch user data from the backend when the component loads
  useEffect(() => {
    axios
      .get("http://localhost:3001/user") // Updated API URL
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user", formData) // Updated API URL
      .then((response) => {
        alert("Settings saved successfully!");
      })
      .catch((error) => console.error("Error saving settings:", error));
  };

  // Handle cancel action (reset form data)
  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      student: "",
      password: "",
    });
  };

  return (
    <div className="settings-page">
      <aside className="sidebar">
        {/* Sidebar with profile image and links */}
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
              marginLeft: "-10px",
            }}
          />
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

        {/* Profile image */}
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
              marginLeft: "-30px",
            }}
          />
          <img
            src={courseImage2}
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

      {/* Settings form */}
      <div className="settings-form-container">
        <h1 className="hlo-setting">Setting</h1>
        <div className="form-wrapper">
          <img
            src={image}
            alt="Profile"
            className="profile-pic"
          />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Student"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <div className="button-group">
              <button type="button" onClick={handleCancel} className="button-cancle">Cancel</button>
              <button type="submit" className="button-submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
