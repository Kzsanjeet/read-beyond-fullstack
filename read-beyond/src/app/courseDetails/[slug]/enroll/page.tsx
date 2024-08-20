"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import courses from "@/app/data/courses.json";
import { useParams } from "next/navigation";
import Nabbar from "@/app/pComponent/nabbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
  const [enrollCourse, setEnrollCourse] = useState<Course[]>([]);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const enrolled = courses.filter((course) => course.slug === slug);
      setEnrollCourse(enrolled);
    }
  }, [slug]);

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
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 bg-gray-50 shadow-xl mx-auto mt-5 w-full">
          {/* Left section covering 40% of the screen */}
          <div className="md:w-1/4 w-full p-6 bg-white shadow-lg rounded-lg">
            {enrollCourse.map((course) => (
              <div key={course.id} className="mb-3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h2>
                <h2 className="text-xl">Topics</h2>
                <Accordion type="single" collapsible>
                  {course.topics.map((topic) => (
                    <AccordionItem key={topic.id} value={`item-${topic.id}`}>
                      <AccordionTrigger className="text-lg font-semibold text-indigo-600 hover:underline">
                        {/* name for the dropdwon */}
                        {topic.name}  
                      </AccordionTrigger>
                      <AccordionContent className="mt-2 text-gray-600">
                        <input type="checkbox" className="mr-2" />{" "}
                        {topic.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-gray-700">
                      <p className="font-semibold">Started on:</p>
                      <p className="text-gray-600">2021-09-01</p>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Ends on:</p>
                      <p className="text-gray-600">2021-12-01</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="font-semibold text-gray-700 mb-2">Progress:</p>
                    <input 
                      type="range" 
                      className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer" 
                    />
                    <p className="text-gray-600 mt-2">10% completed</p>
                  </div>
                  <div className="text-xl font-semibold text-gray-800">
                    <h3>More about the course</h3>
                  </div>
              </div>
            ))}
          </div>

          {/* Right section covering the remaining space */}
          <div className="md:w-3/4 w-full p-6 bg-gray-50 rounded-lg">
            {enrollCourse.map((course) => (
              <React.Fragment key={course.id}>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Provided by{" "}
                    <span className="font-semibold text-indigo-600">
                      {course.provider}
                    </span>
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    About the Course
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Learn how to analyze and visualize data, gain insights, and
                    make data-driven decisions.
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Instructor"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {course.instructor}
                    </h3>
                    <p className="text-gray-600">Instructor</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Course Details
                  </h3>
                  <ScrollArea>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700">
                      <p className="font-semibold">Category:</p>
                      <p className="text-gray-600">{course.category}</p>
                      {/* the below sepator indicates horizontal line to seperate by default it seperate vertically */}
                      <Separator/> 
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Total Topics:</p>
                      {/* <Separator orientation="vertical"/> */}
                      <p className="text-gray-600">
                        {course.topics.length}
                      </p>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Level:</p>
                      <p className="text-gray-600">{course.course_level}</p>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Details:</p>
                      <p className="text-gray-600">
                        {course.topics.length} topics covered in{" "}
                        {course.title}
                      </p>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Taught Language:</p>
                      <p className="text-gray-600">English</p>
                    </div>
                  </div>
                  </ScrollArea>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Enroll;
