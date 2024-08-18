import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Enroll = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Science and Analytics</h2>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-indigo-600 hover:underline">
                Linear Regression
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-600">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

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

      <h3 className="text-xl font-semibold text-gray-800">More about the course</h3>
    </div>
  )
}

export default Enroll
