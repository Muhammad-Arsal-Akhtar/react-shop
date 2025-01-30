import { Link } from "react-router";
import { Categories } from "../assets/sampleData";
import Carousel from "../assets/images/carousel.jpg"

const Home = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100 mt-16">
          {/* Categories */}
          <div className="w-full md:w-1/4 space-y-4 pt-10">
            <h2 className="text-xl font-bold">Shop by Categories</h2>
            <ul className="space-y-2">
                {Categories.map((category, index) => (
                    <li key={index} className="p-2 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200">{category}</li>
                ))}

            </ul>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-3/4 flex justify-center mt-6 md:mt-0 pt-10">
            <img
              src={Carousel}
              alt="Hero"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </section>
      );
  };

export default Home