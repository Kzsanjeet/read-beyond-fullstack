"use client"
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming you're using this accordion component
import { useParams } from 'next/navigation';
import courses from "@/app/data/courses.json"
import Nabbar from '@/app/pComponent/nabbar';
import Footer from '@/app/pComponent/Footer';
import AboutTopicDetails from '@/app/pComponent/AboutTopic'; 
import SelectedTopicDetails from '@/app/pComponent/SelectedTopicDetails';

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

const SidebarTopic = () => {
  const [sideMenu, setSideMenu] = useState<Course[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null); // Track the selected topic ID
  const [viewTopic,setViewTopic] = useState([])
  const { slug } = useParams();

  useEffect(() => {
    const sideDetails = courses.filter((course) => course.slug === slug);
    setSideMenu(sideDetails);
  }, [slug]);

  const handleShowDetails = () => {
    setSelectedTopic(null); // Toggle the visibility of AboutTopicDetails
  };

  const handleSelectedDetails = (topicId:number) =>{
    setSelectedTopic(topicId); // Toggle the visibility of SelectedTopicDetails
  }

  // Determine which component to render based on selectedTopic
  const renderContent = () => {
    switch (selectedTopic) {
      case 1: 
      case 2:
      case 3:
        return <SelectedTopicDetails topicId={selectedTopic} />;
      default:
        return <AboutTopicDetails />;
    }
  };

  return (
    <div>
      <Nabbar />
      <div className='container mx-auto p-6'>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 bg-gray-50 shadow-xl mx-auto mt-5 w-full">

          {/* Left section covering 40% of the screen */}
          <div className="md:w-1/4 w-full p-6 bg-white shadow-lg rounded-lg">
            {sideMenu.map((course) => (
              <div key={course.id} className="mb-3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h2>
                <h2 className="text-xl">Topics</h2>
                <Accordion type="single" collapsible>
                  {course.topics.map((topic) => (
                    <AccordionItem key={topic.id} value={`item-${topic.id}`}>
                      <AccordionTrigger className="text-lg font-semibold text-indigo-600 hover:underline"
                      onClick={()=> handleSelectedDetails(topic.id)}  //handle topic selection
                      >
                        {topic.name}
                      </AccordionTrigger>
                      <AccordionContent className="mt-2 text-gray-600">
                        <input type="checkbox" className="mr-2" />
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
                <div
                  className="text-xl text-indigo-600 font-semibold cursor-pointer hover:underline"
                  onClick={handleShowDetails} // Add onClick handler
                >
                  <h3>More about the course</h3>
                </div>
              </div>
            ))}
          </div>
          {/* Render the appropriate content based on selectedTopic */}
          <div>
            {renderContent()}
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SidebarTopic;



