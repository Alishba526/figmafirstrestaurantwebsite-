import Image from "next/image";
import Banner from "@/app/public/banner.png";
const Hero = () => {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-24">
          <h1 className="text-5xl font-bold">The Key To Fine Dining</h1>
          <p className="mt-4">
            Explore our menu for an unforgettable dining experience. We strive
            to create a welcoming environment with high-quality dishes that
            capture the essence of culinary mastery.
          </p>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg text-center ml-36">
            Explore Menu
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src={Banner} // Use the imported image variable
            alt="Fine dining experience banner" // Add a descriptive alt text
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
