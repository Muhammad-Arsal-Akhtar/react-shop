import { ProductCard } from "./ProductCard"
import { shopData } from "../assets/sampleData"

const ShopSection = () => {
  return (
    <section id="popular-products" className="pt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-bold mb-14 text-center text-3xl leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">Shop</h2>
        <div className="flex flex-wrap -mx-4">
          {shopData.slice(0, 4).map((elem, index) => (
            <ProductCard key={index} productDetails={elem} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopSection