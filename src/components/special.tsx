
const Specials = () => {
    return (
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Today&apos;s Special</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* First Menu Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Biscuit & Sausage Gravy</h3>
              <p className="mt-2">$16</p>
            </div>
  
            {/* Second Menu Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">French Toast with Berries</h3>
              <p className="mt-2">$14</p>
            </div>
  
            {/* Third Menu Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Steak & Eggs</h3>
              <p className="mt-2">$22</p>
            </div>
  
            {/* Fourth Menu Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Avocado Toast</h3>
              <p className="mt-2">$12</p>
            </div>
  
            {/* Fifth Menu Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Pancake Stack</h3>
              <p className="mt-2">$15</p>
            </div>
  
            {/* Sixth Menu Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Salmon Benedict</h3>
              <p className="mt-2">$18</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Specials;
  