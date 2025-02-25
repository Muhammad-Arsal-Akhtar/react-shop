import { ProductCard } from "../components/ProductCard"
import { shopData } from "../assets/sampleData"

const Shop = () => {
  return (
    <section id="popular-products" className="pt-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-10">Shop</h2>
              <div className="flex flex-wrap -mx-4">
                {shopData.map((elem, index)=> (
                    <ProductCard key={index} productDetails={elem}  />
                ))}
              </div>
            </div>
    </section>
  )
}

export default Shop