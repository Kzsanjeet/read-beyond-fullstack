// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// function Slider() {
//   return (
//     <>
//       <div className="flex justify-center items-center h-screen">
//         <Carousel className="w-4/5">
//           <CarouselContent>
//             <CarouselItem className="flex justify-center">
//               <img src="/images/c1.jpeg" alt="Image 1" className="object-cover w-full h-4/5 rounded-lg" />
//             </CarouselItem>
//             <CarouselItem className="flex justify-center">
//               <img src="/images/c2.jpeg" alt="Image 2" className="object-cover w-full h-4/5 rounded-lg" />
//             </CarouselItem>
//             <CarouselItem className="flex justify-center">
//               <img src="/images/c3.jpeg" alt="Image 3" className="object-cover w-full h-4/5 rounded-lg" />
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold">Popular Courses</h2>
//       </div>
//     </>
//   );
// }

// export default Slider;


import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import "../specificcss/buttonHover.css"

function Slider() {
  return (
    <>
      <div className="flex justify-center items-center h-full flex-col">
        <Carousel className="w-4/5"> {/* Added mb-4 to provide space below the carousel */}
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              {/* <img src="/images/c1.jpeg" alt="Image 1" className="object-cover w-full h-4/5 rounded-lg" /> */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Data Science
                      <br className="hidden lg:inline-block text-blue-500"/>readBeyond
                    </h1>
                    <p className="mb-8 leading-relaxed">Learn and explore more about our newly lunched Data Science course from beginners to advance level and go beyond.</p>
                    <div className="flex justify-center">
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex hover:text-white text-white border-0 py-2 px-6 focus:outline-none rounded" id='exploreButton'>Explore</button>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5">
                    <img className="object-cover object-center rounded w-full" alt="hero" src="/images/c1.jpeg"/>
                  </div>
                </div>
              </section>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              {/* <img src="/images/c2.jpeg" alt="Image 2" className="object-cover w-full h-4/5 rounded-lg" /> */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Data Analysis
                      <br className="hidden lg:inline-block text-blue-500"/>readBeyond
                    </h1>
                    <p className="mb-8 leading-relaxed">Learn and explore more about our newly lunched Data Analysis course from beginners to advance level and go beyond.</p>
                    <div className="flex justify-center">
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-blue-600 hover:text-white hover:bg-blue-700 text-white border-0 py-2 px-6 focus:outline-none rounded" id='exploreButton'>Explore</button>                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded w-full h-full" alt="hero" src="/images/c2.jpeg"/>
                  </div>
                </div>
              </section>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              {/* <img src="/images/c3.jpeg" alt="Image 3" className="object-cover w-full h-4/5 rounded-lg" /> */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Artificial Intelligence
                      <br className="hidden lg:inline-block text-blue-500"/>readBeyond
                    </h1>
                    <p className="mb-8 leading-relaxed"> Learn and explore more about our newly lunched Artificial Intelligence course from beginners to advance level and go beyond.</p>
                    <div className="flex justify-center">
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-blue-600 hover:text-white hover:bg-blue-700 text-white border-0 py-2 px-6 focus:outline-none rounded" id='exploreButton'>Explore</button>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded w-full" alt="hero" src="/images/c3.jpeg"/>
                  </div>
                </div>
              </section>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
