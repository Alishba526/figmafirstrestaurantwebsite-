import Image from "next/image";
import about from "@/app/public/about.png";
import React from "react";

function About() {
  return (
    <div className="bg-black text-gold-500 font-serif">
      {/* About Us and Our History */}
      <section className="relative py-24">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
              About Us
            </h2>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              We strive to create a welcoming environment with high-quality
              dishes that capture the essence of culinary mastery.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ml-24">
                Know More
              </button>
            </div>
          </div>

          {/* Image */}

          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src={about} // Use the imported image variable
              alt="about" // Add a descriptive alt text
              width={900}
              height={900}
            />
          </div>
          {/* Our History Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
              Our History
            </h2>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Our story begins with a passion for food and service, ensuring
              each meal is crafted with love and expertise.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ml-20">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Book A Table */}
      <section className="bg-gray-900 py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12">
          Book A Table
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* People Selection */}
          <div className="bg-gray-800 p-6 rounded-md shadow-lg w-full md:w-auto">
            <label htmlFor="people" className="block mb-2 text-gray-300">
              People
            </label>
            <select
              id="people"
              className="bg-black text-white p-2 rounded-md w-full"
            >
              <option>1 person</option>
              <option>2 people</option>
            </select>
          </div>

          {/* Date Selection */}
          <div className="bg-gray-800 p-6 rounded-md shadow-lg w-full md:w-auto">
            <label htmlFor="date" className="block mb-2 text-gray-300">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="bg-black text-white p-2 rounded-md w-full"
            />
          </div>

          {/* Time Selection */}
          <div className="bg-gray-800 p-6 rounded-md shadow-lg w-full md:w-auto">
            <label htmlFor="time" className="block mb-2 text-gray-300">
              Time
            </label>
            <input
              type="time"
              id="time"
              className="bg-black text-white p-2 rounded-md w-full"
            />
          </div>
        </div>
        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300">
          Book Now
        </button>
      </section>
    </div>
  );
}

export default About;
