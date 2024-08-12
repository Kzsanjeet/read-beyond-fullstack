"use client";
import React, { useEffect, useState } from 'react';
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

function Content() {
  const [viewCourses, setViewCourses] = useState<Course[]>([]);

  useEffect(() => {
    // const myCourse = courses.find((course) => {
    //   return course.price === 199.99;
    // });
  

    const myCourse = courses.filter((course) => {
       return course.isPaid === true
    });

    // If a course with the price 199.99 is found, wrap it in an array
    if (myCourse) {
      setViewCourses(myCourse);
    } else {
      setViewCourses([]); // If not found, set an empty array
    }

   
    // setViewCourses(myCourses);
    //lksldnc
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
              <div key={course.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-[450px]">
                  <a className="block relative h-48 w-full rounded-t-lg overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={course.image}
                    />
                  </a>
                  <div className="p-4 h-[202px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">{course.duration}</span>
                        <span className="text-sm text-gray-500">{course.likes} Likes</span>
                      </div>
                      <h1 className="text-lg font-semibold text-gray-900">{course.title}</h1>
                      <h3 className="text-xs font-medium text-gray-600 mt-1">{course.category}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-sm">{course.rating} ★</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">
                        {course.isPaid ? `$${course.price}` : "Free"}
                      </span>
                      <button className="text-indigo-500 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300 rounded-full px-3 py-1 text-sm font-medium">
                        View Course
                      </button>
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
