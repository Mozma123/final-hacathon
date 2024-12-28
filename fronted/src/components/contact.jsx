


// 2
import React, { useState } from "react";
import axios from "axios";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7001/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        // backgroundColor: "#f0f4f8", // Subtle background color
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: "1",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h1
          style={{
            background: "linear-gradient(90deg, #0030B3 0%, #99CA3C 100%)",
            WebkitBackgroundClip: "text",
            display: "inline-block", // Ensures proper text wrapping
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
            fontSize: "40px",
            marginLeft: "50px",
          }}
        >
          Contact Us
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              width: "350px",
              height: "auto",
              marginTop: "30px",
              marginLeft: "70px",
              backgroundColor: "#f5fafa", // Soft background
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "90%",
                  padding: "10px",
                  borderRadius: "15px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  backgroundColor: "#e3f4f9", // Light input background
                  fontSize: "16px",
                }}
              />
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "90%",
                  padding: "10px",
                  borderRadius: "15px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  backgroundColor: "#e3f4f9",
                  fontSize: "16px",
                }}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "90%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "15px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  backgroundColor: "#e3f4f9",
                  fontSize: "16px",
                }}
              ></textarea>
              <button
             className="langing-page-button8"
                type="submit"
                // style={{
                //   padding: "10px 20px",
                //   backgroundColor: "#0030B3",
                //   color: "white",
                //   border: "none",
                //   borderRadius: "10px",
                //   fontSize: "16px",
                //   cursor: "pointer",
                // }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Status Message */}
      {status && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: status.includes("Error") ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          {status}
        </div>
      )}

      {/* Footer Section */}
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "#0030B3",
          color: "white",
          padding: "20px",
        }}
      >
         <p>&copy; 2024 Moazma Amin. All rights reserved.</p>
                {/* Social Media Icons */}
<div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 2px" }}>
    <FaInstagram size={20} color="white" />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 2px" }}>
    <FaFacebookF size={20} color="white" />
   </a>
   <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 2px" }}>
    <FaTwitter size={20} color="white" />
  </a>
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 2px" }}>
   <FaLinkedinIn size={20} color="white" />
  </a>
 </div>
       
      </footer>
    </div>
  );
}

export default Contact;
