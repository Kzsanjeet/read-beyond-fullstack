"use client";
import React, { useEffect, useState } from "react";
import Nabbar from "../pComponent/nabbar";// Assuming Nabbar is another component
import ProfileContent from "../pComponent/ProfileContent";

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
      { student_id: "2", name: "Jane Doe", email: "jane@example.com" },
    ];

    // Set the profile data only once when the component mounts
    setProfile(viewProfile);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <Nabbar/>
      <div>
        {profile.map((viewProfile, index) => (
          <div key={index}>
            <h3>Good Evening,</h3>
            <h1>{viewProfile.name}</h1>
          </div>
        ))}
      </div>
      <div>
        <h2>Coutinue Learning</h2>
        <p>Here are some courses that you have started but havent completed yet.</p>
      </div>
      <ProfileContent/>
    </div>
  );
};

export default Profile;
