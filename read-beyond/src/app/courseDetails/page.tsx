"use client"

import Nabbar from "../pComponent/nabbar";
import { useState, useEffect } from "react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import courses from "../data/courses.json"

interface Course {
  id: number
  title: string
  category: string
  image: string
  price: number
  likes: number
  rating: number
  instructor: string
  description: string
  duration: string
  slug: string
  students_enrolled: number
  course_views: number
  course_level: string
  provider: string
  topics: { id: number; name: string; description: string }[]
  learning_outcomes: string[]
  isPaid: boolean
}

function Coursedetails() {
  const [coursedetails, setcoursedetails] = useState<Course[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API or any other source
    const allCourses = courses.map((course) => course);
    setcoursedetails(allCourses);
  }, []);

  return (
    <>
      <Nabbar/>
      <div className="container mx-auto p-6">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {coursedetails.map((course, index) => {
          return (
            <div key={index} className="mb-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">
                  {course.instructor} <span className="text-sm text-gray-500">- Head Instructor</span>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-2xl text-blue-600 font-semibold">Rs {course.price}</p>
                <button
                  className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Enroll Now
                </button>
                <p className="text-gray-600 mt-2">{course.students_enrolled} students joined</p>
              </div>

              <div className="mb-6">
                <p className="text-blue-500 cursor-pointer hover:underline">Add to wishlist</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">About course</h3>
                  <p className="text-gray-600 mt-2">Explore more about the course.</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{course.duration}</h3>
                  <p className="text-gray-600 mt-2">Learn at your suitable time.</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{course.course_level}</h3>
                  <p className="text-gray-600 mt-2">Nothing is impossible.</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{course.rating} Rating</h3>
                  <p className="text-gray-600 mt-2">Rating by students.</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{course.topics.length} Topics</h3>
                  <p className="text-gray-600 mt-2">Total number of topics covered in this course.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Why learn this course?</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {course.learning_outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Coursedetails;
