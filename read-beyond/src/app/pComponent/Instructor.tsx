import React from 'react'

function Instructor() {
  return (
    <>
    <div>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Grab a chance to
                    <br className="hidden lg:inline-block" />become a Instructor!!!
                </h1>
                <p className="mb-8 leading-relaxed text-pretty">Are you passionate about sharing your knowledge and expertise with eager learners? At readbeyond, we are committed to revolutionizing online education by bringing together top-notch instructors from various fields. We believe in creating an engaging and enriching learning experience for students worldwide, and we need dedicated educators like you to make it happen.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:rounded-lg" id='instructorBtn'>Apply now</button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                className="object-cover object-center rounded-lg shadow-lg shadow-gray-600"
                alt="hero"
                src="https://www.wgu.edu/blog/2020/03/6-ways-improve-your-online-teaching/_jcr_content/root/container/imageandtext.coreimg.85.800.jpeg/1699491838041/6-ways-to-improve-online-teaching.jpeg"
                />
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Instructor
