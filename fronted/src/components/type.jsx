// very imppppppppp
// import React from 'react';
// import image from '../images/1.png';
// import { useNavigate } from 'react-router-dom';

// const Type = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="v2_90">
//       {/* Container with image and black overlay */}
//       <div style={{ position: 'relative', width: '1300px', height: '600px' }}>
//         <img
//           src={image}
//           alt="Background"
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
// {/* Black Overlay */}
// <div
//   style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     // backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     // backgroundColor: 'rgba(255, 255, 255, 0.3)', 
     
//     background: 'linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%)',
//   }}
// ></div>




//       </div>

//       {/* Other Content */}
//       <div className="v9_554"></div>
//       <div className="v2_91"></div>
//       <div className="v2_92"></div>
//       <div className="v2_93"></div>
//       <div className="v2_94"></div>
//       <div className="v2_95"></div>
//       <div className="v2_96">
//         <div className="v2_97">
//           <button className="btn-v2" onClick={() => navigate('/teacherregister')}>TEACHER</button>
//         </div>
//       </div>
//       <div className="v2_99">
//         <div className="v2_100">
//           <button className="btn-v2"   onClick={() => navigate('/loginform')}>STUDENT</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Type;




// 2
import React from 'react';
import image from '../images/1.png';
import { useNavigate } from 'react-router-dom';

const Type = () => {
  const navigate = useNavigate();

  // Function to handle navigation based on registration status
  const handleStudentNavigation = () => {
    const isRegistered = localStorage.getItem('studentRegistered');
    if (isRegistered) {
      navigate('/loginform'); // If registered, go to login
    } else {
      navigate('/studentregister'); // If not registered, go to registration
    }
  };

  const handleTeacherNavigation = () => {
    const isRegistered = localStorage.getItem('teacherRegistered');
    if (isRegistered) {
      navigate('/loginform'); // If registered, go to login
    } else {
      navigate('/teacherregister'); // If not registered, go to registration
    }
  };

  return (
    <div className="v2_90">
      {/* Container with image and black overlay */}
      <div style={{ position: 'relative', width: '1300px', height: '600px' }}>
        <img
          src={image}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Black Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(180deg, rgba(205, 235, 147, 0.7) -15.98%, rgba(200, 215, 255, 0.7) 84.02%)',
          }}
        ></div>
      </div>

      {/* Buttons for Teacher and Student */}
      <div className="v9_554"></div>
      <div className="v2_91"></div>
      <div className="v2_92"></div>
      <div className="v2_93"></div>
      <div className="v2_94"></div>
      <div className="v2_95"></div>
      <div className="v2_96">
        <div className="v2_97">
          <button
            className="btn-v2"
            onClick={handleTeacherNavigation} // Navigate based on registration status
          >
            TEACHER
          </button>
        </div>
      </div>
      <div className="v2_99">
        <div className="v2_100">
          <button
            className="btn-v2"
            onClick={handleStudentNavigation} // Navigate based on registration status
          >
            STUDENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Type;
