import { ProductCard } from "../components/ProductCard"
import { useSelector } from "react-redux"
import { PiEmptyLight } from "react-icons/pi"

const FilterData = () => {
    const searchedProducts = useSelector(state => state.product.searchedProducts)

  return (
    <section id="popular-products" className="pt-20">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10">Filtered Result</h2>
            {
              searchedProducts.length > 0 ? 
                <div className="flex flex-wrap -mx-4">
                {searchedProducts.map((elem, index)=> (
                    <ProductCard key={index} productDetails={elem}  />
                ))}
                </div> 
             :
                <div> <PiEmptyLight className="block mx-auto w-48 h-48 mt-8 text-red-500" />
                    <h3 className="block text-center text-2xl text-gray-500 py-4">( No Such Product Exist.)</h3>
                </div>
            }
        </div>
    </section>
  )
}

export default FilterData