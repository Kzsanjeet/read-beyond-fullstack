"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import courses from "@/app/data/courses.json";
import topics from "@/app/data/topics.json";
import { useParams } from "next/navigation";

import { TiTick } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BiSolidCommentDots } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdDateRange } from "react-icons/md";


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

interface VideoLink {
  video_id: number;
  url: string;
  added_on: string;
  total_views: number;
  video_title: string;
  video_brief_description: string;
  comments: Array<{ user_id: number; comment: string }>;
  completed_by: number[];
  started_by: number[];
  user_review: Array<{ user_id: number; stars: number }>;
}

interface Topic {
  id: number;
  name: string;
  slug: string;
  description: string;
  course_id: number;
  video_links: VideoLink[];
  likes: number;
  reviews: number;
  topic_views: number;
  instructor: string;
  learning_outcomes: string[];
}

const SelectedTopicDetails = ({ topicId }: { topicId: number }) => {
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    const viewCourse = courses.find((viewCourse) => viewCourse.slug === slug);
    if (viewCourse) {
      setCourse(viewCourse);
      const viewTopic = topics.find(
        (viewTopic) =>
          viewTopic.id === topicId && viewTopic.course_id === viewCourse.id
      );
      setSelectedTopic(viewTopic || null);
    }
  }, [slug, topicId]);

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className=" flex flex-col w-full p-2 max-h-[600px] overflow-y-auto">
        {/* Course Title */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <p className="text-gray-600">{course.description}</p>
        </div>

        {/* Instructor and Course Details */}
        <div className="flex flex-wrap items-center space-x-4 mb-8">
          {/* Add horizontal separator if needed */}
          {/* <Separator className="w-full mb-2" />  */}

          <div className="flex items-center space-x-2">
          <FaUserCheck className="text-blue-700 w-7"/>
            <h2 className="text-lg font-medium text-gray-700">
              {course.instructor}
            </h2>
            <Separator orientation="vertical" className="h-6 mx-2" />
          </div>

          <div className="flex items-center space-x-2">
            <AiFillLike  className="text-blue-700" />
            <h2 className="text-gray-700">{course.likes}</h2>
            <Separator orientation="vertical" className="h-6 mx-2" />
          </div>

          <div className="flex items-center space-x-2">
            <BiSolidCommentDots className="text-blue-700" />
            <h2 className="text-gray-700">44</h2>
            <Separator orientation="vertical" className="h-6 mx-2" />
          </div>

          <div className="flex items-center space-x-2">
            <IoMdEye className="text-blue-700"/>
            <h2 className="text-gray-700">{course.course_views}</h2>
          </div>

          {/* Optional horizontal separator at the bottom */}
          <Separator className="w-full mt-2" /> 
        </div>


        {/* Course Contents */}
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contents </h2>
          </div>

          <Accordion type="single" collapsible>
            {selectedTopic ? (
              <AccordionItem
                key={selectedTopic.id}
                value={`item-${selectedTopic.id}`}
              >
                <AccordionTrigger className="text-lg font-semibold text-indigo-600 hover:underline">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>{selectedTopic.name}</span>
                    {/* <p>Continue watching</p> */}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-gray-600">
                  <div>
                   <div>
                   {selectedTopic.video_links.map((video) => (
                      <div key={video.video_id}>
                       <iframe
                        src={video.url}
                        width="100%"
                        height="315"
                        title={video.video_title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      </div>
                    ))}

                   </div>
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <IoMdEye className="text-blue-700 w-7"/>
                        <p>{selectedTopic.video_links[0]?.total_views} views</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MdDateRange className="text-blue-700"/>
                        <p>Added on {selectedTopic.video_links[0]?.added_on}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p>
                        {selectedTopic.description ||
                          "No description available for this topic."}
                      </p>
                    </div>

                    <Separator className="my-4" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Learning Outcomes
                      </h2>
                      <div className="mt-2 space-y-2">
                        {selectedTopic.learning_outcomes.map(
                          (outcome, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <TiTick className="text-blue-700"/>
                              <span>{outcome}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <p>No topic selected.</p>
            )}
          </Accordion>
        </div>
    </div>
  );
};

export default SelectedTopicDetails;
