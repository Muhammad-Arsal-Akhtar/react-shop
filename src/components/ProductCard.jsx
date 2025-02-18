
import { useDispatch } from "react-redux"
import { addTocart } from "../redux/cartSlice"

export const ProductCard = ({ productDetails }) => {

   const dispatch = useDispatch()

   const addProduct = (event, productDetails) => {
        event.stopPropagation()
        event.preventDefault()
        dispatch(addTocart(productDetails))
    }

    return (
        <>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img src={productDetails.imageUrl} alt="Product 1" className="w-full object-cover mb-4 rounded-lg" />
                    <a href="#" className="text-lg font-semibold mb-2">{productDetails.name}</a>
                    <p className="my-2">Women</p>
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-bold text-primary">${productDetails.price}</span>
                        <span className="text-sm line-through ml-2">$24.99</span>
                    </div>
                    <button onClick={(event) => addProduct(event, productDetails)} className="bg-red-500 border border-transparent hover:bg-transparent hover:border-red-500 hover:text-red-500 font-semibold py-2 px-4 rounded-full w-full text-white hover:cursor-pointer">Add to Cart</button>
                </div>
            </div>

        </>
    )
}
