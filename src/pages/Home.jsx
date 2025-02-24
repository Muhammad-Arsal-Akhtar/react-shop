import { Link } from "react-router";
import { Categories } from "../assets/sampleData";
import Carousel from "../assets/images/carousel.jpg"
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import { setProducts } from "../redux/productSlice";
import { homeProduct } from "../assets/sampleData";
import ShopSection from "../components/ShopSection";


const Home = () => {

  const dispatch = useDispatch();
  const productData = useSelector(state => state.product)

  useEffect(() => {
    dispatch(setProducts(homeProduct))
  }, [])

  return (
    <>
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
      <InfoSection />
      <CategorySection />

      <section id="popular-products" className="pt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10">Popular products</h2>
          <div className="flex flex-wrap -mx-4">
            {productData.products.map((elem, index) => (
              <ProductCard key={index} productDetails={elem} />
            ))}
          </div>
        </div>
      </section>

      <ShopSection />
    </>
  );
};

export default Home