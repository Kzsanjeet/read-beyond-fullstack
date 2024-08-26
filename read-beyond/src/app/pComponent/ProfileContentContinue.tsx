"use client";
import React, { useState } from 'react';
import courses from "../data/courses.json";

interface Course {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
    likes: number;
    rating: number;
    duration: string;
    slug: string;
    students_enrolled: number;
    course_views: number;
    isPaid: boolean;
}

const ProfileContent = () => {
    const [course, setCourse] = useState<Course[]>(courses); // Directly use imported data

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    {/* You can include any other content or styling here */}
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {course.map((std_course) => (
                        <div key={std_course.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt={std_course.title}
                                    className="object-cover object-center h-full w-full"
                                    src={std_course.image || "https://dummyimage.com/1203x503"}
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{std_course.title}</h2>
                            <p className="text-base leading-relaxed mt-2">{std_course.category}</p>
                            <label htmlFor="">
                                <p>Progress: <span>10%</span></p>
                            </label>
                            <input type="range"/>
                            
                            {/* <a className="text-indigo-500 inline-flex items-center mt-3" href={`/courses/${std_course.slug}`}>Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileContent;
