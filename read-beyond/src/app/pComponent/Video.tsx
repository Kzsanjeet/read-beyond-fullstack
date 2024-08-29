import React, { useEffect, useState } from "react";
import "../specificcss/video.css";
import { useParams } from "next/navigation";
import courses from "../data/courses.json";
import topics from "../data/topics.json";

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

const Video = ({ topicId }: { topicId: number }) => {
  const [videoLinks, setVideoLinks] = useState<VideoLink[]>([]);
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchedCourse = courses.find(
        (viewCourse) => viewCourse.slug === slug
      );
      if (fetchedCourse) {
        setCourse(fetchedCourse);
        const fetchedTopic = topics.find(
          (viewTopic) =>
            viewTopic.id === topicId && viewTopic.course_id === fetchedCourse.id
        );
        if (fetchedTopic) {
          setVideoLinks(fetchedTopic.video_links);
        }
      }
    }
  }, [slug, topicId]);

  return (
    <div>
      {videoLinks.map((videoLink) => (
        <div key={videoLink.video_id}>
          <iframe
            src={videoLink.url}
            width="100%"
            height="315"
            title={videoLink.video_title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Video;
