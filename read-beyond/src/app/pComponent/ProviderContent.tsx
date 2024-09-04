"use client"

import React, { useEffect, useState } from 'react';
import courses from "@/app/data/courses.json";
import { MdModeEdit } from "react-icons/md";

const ProviderContent = () => {
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
        provider: string;
    }

    const [course, setCourse] = useState<Course[]>([]);

    useEffect(() => {
        const viewCourse = courses.filter((course) => course.provider === "edX");
        setCourse(viewCourse);
    }, []);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {course.map((prov) => (
                            <div key={prov.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img 
                                        alt={prov.title} 
                                        className="object-cover object-center h-full w-full" 
                                        src={prov.image} 
                                    />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{prov.title}</h2>
                                <p className="text-base leading-relaxed mt-2">
                                    {`Category: ${prov.category} | Duration: ${prov.duration}`}
                                </p>
                                <p className="text-base leading-relaxed mt-2 text-yellow-500"><span className='text-black mr-2'>Ratings:</span>{prov.rating} </p>
                                {/* <a className="text-indigo-500 inline-flex items-center mt-3" href={`/course/${prov.slug}`}>
                                    Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                                <div>
                                    <button className='flex flex-row bg-blue-500 text-white pr-4 pl-4 pt-1 pb-1 gap-2 justify-center items-center rounded-lg'><MdModeEdit /> Edit</button>
                                    <button className='flex flex-row bg-red-500 text-white pr-4 pl-4 pt-1 pb-1 gap-2 justify-center items-center rounded-lg'><MdModeEdit /> Del</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProviderContent;  
