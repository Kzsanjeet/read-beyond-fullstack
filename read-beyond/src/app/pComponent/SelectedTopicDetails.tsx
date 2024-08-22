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
import topics from "@/app/data/topics.json"
import { useParams } from "next/navigation";
import Nabbar from "@/app/pComponent/nabbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Video from "./Video";

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
  
const SelectedTopicDetails = ({topicId}:{topicId:number}) => {
    const { slug } = useParams();
    const [course, setCourse] = useState<Course[]>([]);
    const [topic,setTopic] = useState<Topic[]>([])
    useEffect(()=>{
        const viewCourses = courses.filter((viewCourse)=> viewCourse.slug === slug)
        setCourse(viewCourses)
    },[slug])

    useEffect(() => {
        const viewTopic = topics.filter((viewTopic) => viewTopic.id === topicId)
        setTopic(viewTopic)
    })
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
  <ScrollArea className="max-w-4xl mx-auto bg-white p-4 shadow-lg rounded-lg">
    {course.map((viewCourse) => (
      <div key={viewCourse.id}>
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{viewCourse.title}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <p className="text-gray-600">
            Course description goes here. It should provide an overview of the
            course content and objectives.
          </p>
          <div className="flex items-center space-x-2">
            <img
              className="w-10 h-10 rounded-full"
              src="profile-placeholder.png"
              alt="profile icon"
            />
            <h2 className="text-lg font-medium text-gray-700">{viewCourse.instructor}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <img src="likes-placeholder.png" alt="like icon" className="w-6 h-6" />
            <h2 className="text-gray-700">Number of Likes</h2>
          </div>
          <div className="flex items-center space-x-2">
            <img src="comments-placeholder.png" alt="comment icon" className="w-6 h-6" />
            <h2 className="text-gray-700">Number of Comments</h2>
          </div>
          <div className="flex items-center space-x-2">
            <img src="views-placeholder.png" alt="view icon" className="w-6 h-6" />
            <h2 className="text-gray-700">Number of Views</h2>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contents</h2>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item">
              <AccordionTrigger className="text-lg font-semibold text-indigo-600 hover:underline">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Topic Title</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-600">
                <div>
                  <Video />
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <img src="views-placeholder.png" alt="view icon" className="w-6 h-6" />
                      <p>View Count</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="calendar-placeholder.png" alt="calendar icon" className="w-6 h-6" />
                      <p>Date</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>
                      Description of the topic goes here. This is a detailed
                      explanation of the content covered in this section.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Learning Outcomes
                    </h2>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Outcome 1</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Outcome 2</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Outcome 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    ))}
  </ScrollArea>
</div>
  )
}

export default SelectedTopicDetails
