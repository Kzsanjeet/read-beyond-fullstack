import React, { useState } from 'react'
import courses from "../data/courses.json"

interface CardProps{
    data:{
        id: number
        title: string
        category: string
        image: string
        price: number
        likes: number
        rating: number
        duration: string
        slug: string
        students_enrolled: number
        course_views: number
        isPaid: boolean
    }
}

const  Card: React.FC<CardProps> = ({data})=> {
    console.log(data)
  return (
    <>
        <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.image}/>
                    </a>
                    <div className="mt-4">
                    <h1>{data.title}</h1>
                    </div>
                    <div>
                        <p className="mt-1">{data.price}</p>
                        <button>View Course</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Card
