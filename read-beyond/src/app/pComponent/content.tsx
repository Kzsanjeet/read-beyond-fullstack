"use client";
import React, { useEffect, useState } from 'react';
import courses from "../data/courses.json";
import Link from 'next/link';
import { AiFillLike } from "react-icons/ai";


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

function Content() {
  const [viewCourses, setViewCourses] = useState<Course[]>([]);

  useEffect(() => {
    const myCourse = courses.filter((course) => course.likes >= 1400);
    setViewCourses(myCourse);
  }, []);

  return (
    <div>
      <div className="text-center text-2xl font-extrabold mb-6">
        <h1>Popular Courses</h1> 
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
            {viewCourses.map((course) => (
              <div key={course.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out h-[420px] bg-gray-200">
                  <a className="block relative h-48 w-full rounded-t-lg overflow-hidden">
                    <img
                      alt="course"
                      className="object-cover object-center w-full h-full block"
                      src={course.image}
                    />
                  </a>
                  <div className="p-4 h-[202px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-black">{course.duration}</span>

                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-black">{course.likes}</span>
                          <AiFillLike className="text-sm text-black" />
                        </div>
                      </div>
                      <h1 className="text-lg font-semibold text-gray-900">{course.title}</h1>
                      <h3 className="text-xs font-medium text-blue-600 mt-1">{course.category}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-sm">{course.rating} ★</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">
                        {course.isPaid ? `$${course.price}` : "Free"}
                      </span>
                      <Link href={`/courseDetails/${course.slug}`}>
                        <button className="bg-blue-500 transition-colors duration-300 rounded-l px-3 py-1 text-sm font-medium text-white hover:text-white" id='viewCourse'>
                          View Course
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Content;
