
// 2
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../images/v2_95.png';  // Ensure the correct path to the second image
import image1 from "../images/1.png"; // Ensure the correct path to the first image

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:7001/login', { email, password });
            if (response.data === "Success") {
                alert('Login successful!');
                navigate('/home');
            } else {
                alert('Incorrect password! Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div
            style={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // flexDirection: 'column',
                // height: '100vh',
                // background: `linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%), url(${image1}) no-repeat center center/cover, url(${image}) no-repeat center center/cover`,
                // position: 'relative',
                // backgroundSize: 'cover',
                // backgroundBlendMode: 'overlay', // Ensure both images blend nicely
                display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100vh',
                        // background: `url(${image1}) no-repeat center center/cover`,
                        background: `linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%),
                          url(${image1}) no-repeat center center/cover`, 
                        position: 'relative',
            }}
        >
            {/* Image container */}
            {/* <div className="con"></div>
            <div className="con1"></div> */}

            {/* Blue Rounded Container */}
            <div className='hk' style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
                <form onSubmit={handleSubmit}>
                    <span className='teacherform' style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>Login Form</span>

                    {/* Email Input */}
                    <div className="mb-3">
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                color: 'black',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                boxSizing: 'border-box',
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-3">
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                color: 'black',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                boxSizing: 'border-box',
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="button1"
                    //  style={{
                    //     width: '100%',
                    //     padding: '10px',
                    //     backgroundColor: '#007bff',
                    //     color: 'white',
                    //     border: 'none',
                    //     borderRadius: '5px',
                    //     cursor: 'pointer',
                    //     fontWeight: 'bold'
                    // }}
                    >
                        Submit
                    </button>
                </form>

                {/* Link to Register page */}
                <p className="text-center mt-3" style={{ textAlign: 'center', color: '#555' }}>
                    Don&apos;t have an account?{' '}
                    <Link to="/studentregister" className="text-decoration-none text-secondary">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;