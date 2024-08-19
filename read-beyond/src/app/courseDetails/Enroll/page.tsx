"use client"

import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import courses from "@/app/data/courses.json";

interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  likes: number;
  rating: number;
  instructor: string;
  description: string;
  duration: string;
  slug: string;
  students_enrolled: number;
  course_views: number;
  course_level: string;
  provider: string;
  topics: { id: number; name: string; description: string }[];
  learning_outcomes: string[];
  isPaid: boolean;
}

const Enroll = () => {
  const [enrollCourse, setEnrollCourse] = useState<Course[]>([])

  useEffect(() => {
    const enroll = courses.map((enrolled) => enrolled)
    setEnrollCourse(enroll)
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 bg-gray-50 max-w-screen-lg mx-auto">
      {/* Left section covering 40% of the screen */}
      <div className="md:w-1/4 w-full p-6 bg-white shadow-lg rounded-lg">
        {enrollCourse.map((enrolled) => (
          <div key={enrolled.id} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{enrolled.title}</h2>
            <Accordion type="single" collapsible>
              {enrolled.topics.map((topic) => (
                <AccordionItem key={topic.id} value={`item-${topic.id}`}>
                  <AccordionTrigger className="text-lg font-semibold text-indigo-600 hover:underline">
                    {topic.name}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-gray-600">
                    <input type="checkbox" className="mr-2" /> {topic.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* Right section covering the remaining space */}
      <div className="md:w-3/4 w-full p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Science and Analytics</h1>
          <p className="text-gray-600 mb-4">
            Provided by <span className="font-semibold text-indigo-600">Coursera</span>
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Course</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dive into data science with this course focused on data analysis, visualization, and data-driven decision-making. Suitable for advanced learners aiming to develop practical data science skills.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Learn how to analyze and visualize data, gain insights, and make data-driven decisions.
          </p>
        </div>
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
            <img src="https://via.placeholder.com/150" alt="Instructor" className="object-cover h-full w-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Dr. Emily Johnson</h3>
            <p className="text-gray-600">Instructor</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-700">
              <p className="font-semibold">Category:</p>
              <p className="text-gray-600">Data Science</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Total Topics:</p>
              <p className="text-gray-600">3</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Level:</p>
              <p className="text-gray-600">Advanced</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Details:</p>
              <p className="text-gray-600">3 topics covered in Data Science and Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enroll
