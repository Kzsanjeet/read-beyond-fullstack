"use client"
import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Progress } from '@/components/ui/progress';

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

const EnrolledPaidCourse = ({ course }: { course: Course }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
            <Progress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledPaidCourse;
