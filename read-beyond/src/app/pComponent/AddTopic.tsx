"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react'

const AddTopic = () => {
  const [learningOutcomes, setLearningOutcomes] = useState<string[]>([''])
  const [allInput, setAllInput] = useState({
    name: "",
    description: "",
    course: "",
    instructor: "",
    learning_outcomes: ['']
  })

  // Add a new learning outcome input field
  const addLearningOutcome = () => {
    setLearningOutcomes([...learningOutcomes, ''])  // ...learningOutcomes copy the all the learning outcomes and '' copy the next learning outcomes
  }

  // Remove a specific learning outcome input field
  const removeLearningOutcome = (index: number) => {
    setLearningOutcomes(learningOutcomes.filter((_, i) => i !== index))   // it only displays the input filled that doesnt match the index
  }

  // Handle changes in learning outcome inputs
  const handleLearningOutcomeChange = (index: number, value: string) => {
    const newOutcomes = [...learningOutcomes]
    newOutcomes[index] = value
    setLearningOutcomes(newOutcomes)
  }

  // const newOut = (index:number, value:string) =>{
  //   const newOutcomes = [...learningOutcomes]
  //   newOutcomes[index] = value
  //   setLearningOutcomes(newOutcomes)
  // }
  
  // Handle changes in all other form inputs
  const handleAllChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAllInput({
      ...allInput,
      [name]: value
    })
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // You can handle form submission logic here
    console.log("Form Submitted:", { allInput, learningOutcomes })
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Add New Topic</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={allInput.name}
            onChange={handleAllChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Enter topic name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={allInput.description}
            onChange={handleAllChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Enter topic description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
          <select
            id="course"
            name="course"
            value={allInput.course}
            onChange={handleAllChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="">Select a course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">Instructor</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={allInput.instructor}
            onChange={handleAllChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Enter instructor name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Learning Outcomes</label>
          {learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={outcome}
                onChange={(e) => handleLearningOutcomeChange(index, e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                placeholder="Enter learning outcome"
              />
              <button
                type="button"
                onClick={() => removeLearningOutcome(index)}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addLearningOutcome}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Another Learning Outcome
          </button>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700"
          >
            Save Topic
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTopic
