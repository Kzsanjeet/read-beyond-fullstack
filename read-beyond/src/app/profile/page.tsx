// "use client";
// import React, { useEffect, useState } from "react";
// import Nabbar from "../pComponent/nabbar";// Assuming Nabbar is another component
// import ProfileContentContinue from "../pComponent/ProfileContentContinue";
// import RecentlyViewed from "../pComponent/RecentlyViewedContent";
// import Footer from "../pComponent/Footer";

// interface Profiles {
//   student_id: string;
//   name: string;
//   email: string;
// }

// const Profile = () => {
//   const [profile, setProfile] = useState<Profiles[]>([]);

//   useEffect(() => {
//     // Example static data or fetch data from an API
//     const viewProfile = [
//       { student_id: "1", name: "John Doe", email: "john@example.com" },
//       { student_id: "2", name: "Jane Doe", email: "jane@example.com" },
//     ];

//     // Set the profile data only once when the component mounts
//     setProfile(viewProfile);
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div>
//       <Nabbar/>
//       <div>
//         {profile.map((viewProfile, index) => (
//           <div key={index}>
//             <h3>Good Evening,</h3>
//             <h1>{viewProfile.name}</h1>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h2>Coutinue Learning</h2>
//         <p>Here are some courses that you hav e started but havent completed yet.</p>
//       </div>
//       <ProfileContentContinue/>
//       <div>
//         <h2>Your recent exploration</h2>
//         <p>Here some courses that you recently viewed.</p>
//       </div>
//       <RecentlyViewed/>
//       <Footer/>
//     </div>
//   );
// };

// export default Profile;


"use client";
import React, { useEffect, useState } from "react";
import ProfileContentContinue from "../pComponent/ProfileContentContinue";
import RecentlyViewed from "../pComponent/RecentlyViewedContent";
import Footer from "../pComponent/Footer";
import ProfileNav from "../pComponent/ProfileNav";
// import students from "../data/student.json"

interface Profiles {
  student_id: string;
  name: string;
  email: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<Profiles[]>([]);

  useEffect(() => {
    // Example static data or fetch data from an API
    const viewProfile = [
      { student_id: "1", name: "John Doe", email: "john@example.com" },
    //   { student_id: "2", name: "Jane Doe", email: "jane@example.com" },
    ];
    // Set the profile data only once when the component mounts
    setProfile(viewProfile);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="bg-gray-100 min-h-screen">
      <ProfileNav/>
      <div className="container mx-auto py-8">
        {profile.map((viewProfile, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg text-gray-600">Good Evening,</h3>
            <h1 className="text-4xl font-semibold text-gray-900 mt-1">
              {viewProfile.name}
            </h1>
          </div>
        ))}
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Continue Learning
        </h2>
        <p className="text-base text-gray-600 mb-4">
          Here are some courses that you have started but haven’t completed yet.
        </p>
        <ProfileContentContinue />
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Your Recent Exploration
        </h2>
        <p className="text-base text-gray-600 mb-4">
          Here are some courses that you recently viewed.
        </p>
        <RecentlyViewed />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
