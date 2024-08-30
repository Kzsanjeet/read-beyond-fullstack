"use client"
import React, { useEffect, useState } from 'react';
import EnrolledPaidCourse from '@/app/pComponent/EnrolledPaidCourse';
import ProfileNav from '@/app/pComponent/ProfileNav';
import Footer from '@/app/pComponent/Footer';
import courses from "@/app/data/courses.json";
import EnrolledFreeCourse from '@/app/pComponent/EnrolledFreeCourse';

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

const Page = () => {
  const [freeCourses, setFreeCourses] = useState<Course[]>([]);
  const [paidCourses, setPaidCourses] = useState<Course[]>([]);
  const [showCourse, setShowCourse] = useState<"freeCourse" | "paidCourse">("freeCourse");

  useEffect(() => {
    const freeCourseList = courses.filter(course => course.price === 0);
    const paidCourseList = courses.filter(course => course.price > 0);
    setFreeCourses(freeCourseList);
    setPaidCourses(paidCourseList);
  }, []);

  const renderCourses = () => {
    if (showCourse === "freeCourse") {
      return freeCourses.length > 0 ? (
        freeCourses.map((course) => <EnrolledFreeCourse key={course.id} course={course} />)
      ) : (
        <p>No free courses enrolled.</p>
      );
    } else if (showCourse === "paidCourse") {
      return paidCourses.length > 0 ? (
        paidCourses.map((course) => <EnrolledPaidCourse key={course.id} course={course} />)
      ) : (
        <p>No paid courses enrolled.</p>
      );
    }
    return <p>No courses enrolled.</p>;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileNav />
      <div className="container mx-auto py-10 px-5">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Enrolled Courses</h2>
        <div className="flex gap-3">
          <h3
            className={`text-2xl font-medium mb-4 pl-4 pr-4 pt-2 pb-2 rounded-lg shadow-sm cursor-pointer ${
              showCourse === "paidCourse"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setShowCourse("paidCourse")}
          >
            Paid Courses
          </h3>
          <h3
            className={`text-2xl font-medium mb-4 pl-4 pr-4 pt-2 pb-2 rounded-lg shadow-sm cursor-pointer ${
              showCourse === "freeCourse"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setShowCourse("freeCourse")}
          >
            Free Courses
          </h3>
        </div>

        <div className="mb-8 flex">
          {renderCourses()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
