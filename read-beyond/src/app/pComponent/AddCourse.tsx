"use client"
import React, { useState } from 'react'

const AddCourse = () => {
  const [isPaid, setIsPaid] = useState(false)
  const [allInput, setAllInput] = useState({
    courseName: "",
    courseDes: "",
    instructor: "",
    duration: "",
    isPaid: "false",
    price: 0,
    courseImage: "",
    courseLevel: "",
    language: "",
  })

  // Handle dynamic input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAllInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (name === "isPaid") {
      setIsPaid(value === "true")
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 flex justify-center">Add New Course</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={allInput.courseName}
            onChange={handleChange}
            placeholder="Enter course name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="courseDes" className="block text-sm font-medium text-gray-700">
            Course Description
          </label>
          <textarea
            id="courseDes"
            name="courseDes"
            value={allInput.courseDes}
            onChange={handleChange}
            placeholder="Enter course description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
            Instructor
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={allInput.instructor}
            onChange={handleChange}
            placeholder="Enter instructor name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration (in hours)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={allInput.duration}
            onChange={handleChange}
            placeholder="Enter course duration"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="isPaid" className="block text-sm font-medium text-gray-700">
            Is the course paid?
          </label>
          <select
            id="isPaid"
            name="isPaid"
            value={allInput.isPaid}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {/* Conditionally render the price input if isPaid is true */}
        {isPaid && (
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price (in $)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={allInput.price}
              onChange={handleChange}
              placeholder="Enter course price"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="courseImage" className="block text-sm font-medium text-gray-700">
            Course Image
          </label>
          <input
            type="file"
            id="courseImage"
            name="courseImage"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            // Add onChange handler if you want to handle file uploads
          />
        </div>

        <div className="mb-4">
          <label htmlFor="courseLevel" className="block text-sm font-medium text-gray-700">
            Course Level
          </label>
          <select
            id="courseLevel"
            name="courseLevel"
            value={allInput.courseLevel}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <select
            id="language"
            name="language"
            value={allInput.language}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="English">English</option>
            <option value="Nepali">Nepali</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            id="saveCourse"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700"
          >
            Save Course
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCourse
