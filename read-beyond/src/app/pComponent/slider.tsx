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

function Slider() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <Carousel className="w-4/5"> {/* Added mb-4 to provide space below the carousel */}
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <img src="/images/c1.jpeg" alt="Image 1" className="object-cover w-full h-4/5 rounded-lg" />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img src="/images/c2.jpeg" alt="Image 2" className="object-cover w-full h-4/5 rounded-lg" />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img src="/images/c3.jpeg" alt="Image 3" className="object-cover w-full h-4/5 rounded-lg" />
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
