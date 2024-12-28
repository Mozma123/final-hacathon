


// import React from 'react';
// import image from '../images/1.png';
// import { useNavigate } from 'react-router-dom';

// const Extra = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="v2_90">
//       {/* Container with image and gradient overlay */}
//       <div style={{ position: 'relative', width: '1080px', height: '600px' }}>
//         <img
//           src={image}
//           alt="Background"
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//         {/* Gradient Overlay */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: 'linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%)',      }}   ></div>
//       </div>
//         {/* Form */}
//              {/* Form */}
//              <form>
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
//     // </div>
//   );
// };

// export default Extra;









// 2
import React from 'react';
import image from '../images/1.png';
import { useNavigate } from 'react-router-dom';

const Extra = () => {
  const navigate = useNavigate();

  return (
    <div className="v2_90">
      {/* Container with image and gradient overlay */}
      <div style={{ position: 'relative', width: '1080px', height: '600px' }}>
        <img
          src={image}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%)',
          }}
        ></div>
      </div>

      {/* Form */}
      <form
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <span
          className="teacherform"
          style={{
            display: 'block',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Register Form
        </span>

        <style>
          {`
            input::placeholder {
              color: white;
            }
          `}
        </style>

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
        />

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
        />

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#99ca3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%',
            marginTop: '10px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#88b339')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#99ca3c')}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Extra;
