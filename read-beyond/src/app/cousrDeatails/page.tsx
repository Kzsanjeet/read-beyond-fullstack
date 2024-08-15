"use client"
function Coursedetails() {
    //   const [showDetails, setShowDetails] = useState(false);
    
      return (
        <>
          <div className="container mx-auto p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Introduction to Artificial Intelligence</h1>
              <p className="text-gray-600 mt-2">This course provides an introduction to the fundamental concepts and techniques in artificial intelligence.</p>
            </div>
    
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-700">Dr. Jane Smith <span className="text-sm text-gray-500"> - Head Instructor</span></p>
            </div>  
    
            <div className="mb-4">
              <p className="text-2xl text-blue-600 font-semibold">Rs 299.99</p>
              <button 
                // onClick={() => setShowDetails(!showDetails)}
                className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Enroll Now
              </button>
              <p className="text-gray-600 mt-2">5,000 students joined</p>
            </div>
    
            <div className="mb-6">
              <p className="text-blue-500 cursor-pointer hover:underline">Add to wishlist</p>
            </div>
    
            {/* {showDetails && ( */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">About course</h3>
                  <p className="text-gray-600 mt-2">Explore more about the course.</p>
                </div>
    
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">10 weeks</h3>
                  <p className="text-gray-600 mt-2">Learn at your suitable time.</p>
                </div>
    
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Beginner</h3>
                  <p className="text-gray-600 mt-2">Nothing is impossible.</p>
                </div>
    
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">4.5</h3>
                  <p className="text-gray-600 mt-2">Rating by students.</p>
                </div>
    
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">3 Topics</h3>
                  <p className="text-gray-600 mt-2">Total number of topics covered in this course.</p>
                </div>
    
                <div>
                  <h3 className="text-xl font-semibold">Why learn this course?</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Understand the fundamental concepts of AI and applications.</li>
                    <li>Learn techniques for knowledge representation and problem-solving in AI.</li>
                  </ul>
                </div>
              </div>
            {/* )} */}
          </div>
        </>
      );
    }
    
    export default Coursedetails;
    