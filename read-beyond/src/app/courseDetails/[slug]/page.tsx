"use client";

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import courses from "@/app/data/courses.json";
import Nabbar from '@/app/pComponent/nabbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from '@/app/pComponent/Footer';
import Link from 'next/link';  // Correct import for Link
import { Separator } from '@/components/ui/separator';
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineTopic } from "react-icons/md";

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

const CourseDetails = () => {
  const { slug } = useParams();
  const [viewCourses, setViewCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (slug) {
      const myCourse = courses.filter((course) => course.slug === slug);
      setViewCourses(myCourse);
      console.log(myCourse);
    }
  }, [slug]);

  return (
    <div>
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
          {viewCourses.map((course) => (
            <div key={course.id} className="mb-6">
              <h1 className='text-3xl font-semibold mb-5 mt-5 text-blue-600'>{course.provider}</h1>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">
                  {course.instructor} <span className="text-sm text-gray-50 bg-blue-500 pt-1.5 pb-1.5 pr-1.5 pl-1.5 rounded-lg">- Head Instructor</span>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-semibold">
                  {/* here we have used a template literals as we have to combine variable with strings */}
                  {course.price ? `Rs ${course.price}` : "Free"}  
                </p>
                <Link href={`/courseDetails/${slug}/Enrolled`}>
                  <button
                    className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    id='loginBtn'
                  >
                    Enroll Now
                  </button>
                </Link>
                <p className="text-gray-600 mt-2">{course.students_enrolled} students joined</p>
              </div>

              <div className="mb-6">
                <p className="text-blue-500 cursor-pointer underline">Add to wishlist</p>
              </div>

              <div className="p-4 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">About course</h3>
                  <p className="text-gray-600 mt-2">Explore more about the course.</p>
                </div>
                <div className='flex items-center'>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{course.duration}</h3>
                    <p className="text-gray-600 mt-2">Learn at your suitable time.</p>
                  </div>
                  <Separator orientation='vertical'/>
                  <div className="h-full w-[1px] bg-gray-300 mx-4" /> {/* Custom Separator */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{course.course_level}</h3>
                    <p className="text-gray-600 mt-2">Nothing is impossible.</p>
                  </div>
                  <div className="h-full w-[1px] bg-gray-300 mx-4" /> {/* Custom Separator */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {course.rating} <FaStarHalfStroke className='text-yellow-500' />
                    </h3>
                    <p className="text-gray-600 mt-2">Rating by students.</p>
                  </div>

                  <div className="h-full w-[1px] bg-gray-300 mx-4" /> {/* Custom Separator */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold flex gap-2 items-center">{course.topics.length} <MdOutlineTopic className='text-blue-700' /></h3>
                    <p className="text-gray-600 mt-2">Total number of topics covered in this course.</p>
                  </div>
                </div>


                <div>
                  <h3 className="text-xl font-semibold">Why learn this course?</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {course.learning_outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className='bg-gray-50 w-full'>
                  <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-200 shadow-lg mt-4 mb-5 rounded-lg h-96">
                      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Certificate of Achievement</h1>
                        <p className="mb-8 leading-relaxed">Upon successful completion of this course, you will be awarded a Certificate of Achievement, acknowledging your dedication and hard work.</p>
                        <p className='text-gray-400'>Showcase your talent and expertise with the Certificate you earned through completing this course.</p>
                      </div>

                      <div className="lg:max-w-sm lg:w-[calc(100%-4px)] md:w-2/3 w-4/5 shadow-lg">
                        <img
                          className="object-cover object-center rounded"
                          alt="hero"
                          src="/images/certi.png"
                          style={{ height: 'calc(100% - 50px)' }}  // Decrease height by 50px
                        />
                      </div>
                    </div>
                  </section>
                </div>

                <div>
                  <h2>Explore the summary of the course- {course.topics.length} topics</h2>
                  <Accordion type="single" collapsible>
                    {course.topics.map((topic) => (
                      <AccordionItem key={topic.id} value={`item-${topic.id}`}>
                        <AccordionTrigger>{topic.name}</AccordionTrigger>
                        <AccordionContent>
                          {topic.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div> 
      <Footer/>
    </div>
  );
}

export default CourseDetails;
