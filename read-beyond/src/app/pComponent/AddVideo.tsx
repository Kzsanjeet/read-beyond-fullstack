"use client"
import React, { useState } from 'react'

const AddVideo = () => {
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [topic, setTopic] = useState('')
  const [videoFile, setVideoFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({
      videoTitle,
      videoDescription,
      topic,
      videoFile
    })
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Add New Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="videoTitle" className="block text-sm font-medium text-gray-700">Video Title</label>
          <input
            type="text"
            id="videoTitle"
            name="videoTitle"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Enter video title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="videoDescription" className="block text-sm font-medium text-gray-700">Video Brief Description</label>
          <textarea
            id="videoDescription"
            name="videoDescription"
            value={videoDescription}
            onChange={(e) => setVideoDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Enter video description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="">Select a topic</option>
            <option value="Topic1">Topic 1</option>
            <option value="Topic2">Topic 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="videoFile" className="block text-sm font-medium text-gray-700">Upload Video</label>
          <input
            type="file"
            id="videoFile"
            name="videoFile"
            onChange={(e) => setVideoFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700"
          >
            Save Video
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddVideo
