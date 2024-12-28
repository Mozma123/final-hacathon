
// import React from 'react';
// import image from '../images/v2_95.png';
// import image1 from "../images/1.png"

// const Teacherregister = () => {
//   return (
//     <div
//       style={{
      


//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         height: '100vh',
//         // background: `url(${image1}) no-repeat center center/cover`,
//         background: `linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%), url(${image1}) no-repeat center center/cover`, // Combined background image and gradient
//         position: 'relative',
//       }}
//     >
//       {/* image cointainer and image */}
//       <div className="con"></div>
//       <div className="con1"></div>
//       {/* Blue Rounded Container */}
//       <div className='hk' >
//         {/* Form */}
//         <form>
//           <span  className='teacherform'  > Register Form </span>

//  <div>
//  <div>
//   <style>
//     {`
//       input::placeholder {
//         color: white; } `}
//   </style>
//   <input
//     id="email"
//     type="email"
//     placeholder="Email"
//     style={{
//       width: '100%',
//       padding: '10px',
//       margin: '10px 0',
//       color: 'black',
//       backgroundColor: 'rgba(255, 255, 255, 0.5)',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       boxSizing: 'border-box',
//     }} /></div>
//             <input
//               id="username"
//               type="text"
//               placeholder="Username"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 margin: '10px 0',
//                 color: 'black',
//                 backgroundColor: 'rgba(255, 255, 255, 0.5)',
//                 border: '1px solid #ccc',
//                 borderRadius: '5px',
//                 boxSizing: 'border-box',       }}   />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 margin: '10px 0',
//                 color: 'black',
//                 backgroundColor: 'rgba(255, 255, 255, 0.5)',
//                 border: '1px solid #ccc',
//                 borderRadius: '5px',
//                 boxSizing: 'border-box',      }}      />  </div>
//   <button1 type="submit" className="button1"> Submit</button1>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Teacherregister;








import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            setErrorMessage('All fields are required.');
            return;
        }

        axios.post('http://localhost:7001/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage('An error occurred during registration.');
            });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                background: `linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%), url('../images/1.png') no-repeat center center/cover`,
                position: 'relative',
            }}
        >
            {/* Using the hk class */}
            <div className='hk'>
                <form onSubmit={handleSubmit}>
                    <span className='teacherform'> Register Form </span>

                    <div>
                        <style>
                            {`
                                input::placeholder {
                                    color: white;
                                }
                            `}
                        </style>

                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
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
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            required
                        />

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
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            required
                        />

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
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            required
                        />
                    </div>

                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                    <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%', padding: '10px' }}>Register</button>
                </form>

                <p className=''>
                    Already have an account? <Link to='/loginform' className="">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

