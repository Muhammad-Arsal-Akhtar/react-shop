import { useSelector } from "react-redux";
import { TbGardenCartOff } from "react-icons/tb";
import { useState } from "react";
import Modal from "../components/Modal";

const Cart = () => {
  const productsInCart = useSelector(state => state.cart)
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    { (productsInCart.productsInCart.length > 0) ? 
    <div className="bg-gray-100 py-8 mt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 text-red-500">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {productsInCart.productsInCart.map((product, index)=> (                    
                  <tr key={index}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4"
                          src={'.'+product.image}
                          alt="Product"
                        />
                        <span className="font-semibold">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4">${product.individualItemPrice}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">-</button>
                        <span className="text-center w-8">{product.quantity}</span>
                        <button className="border rounded-md py-2 px-4 ml-2">+</button>
                      </div>
                    </td>
                    <td className="py-4">${product.price}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              {/* <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div> */}
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total Items</span>
                <span className="font-semibold">{productsInCart.totalQuantity}</span>
              </div>
              <br />
              <div className="flex justify-between mb-2">
                <span>Address:</span>
                <span>Jelflon street, 0005, Flat 8.</span>
              </div>
              <br />
              <div className="flex justify-between mb-2">
                {/* <a href="">Change Address</a> */}
                {/* Open Modal Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:cursor-pointer"
                >
                  Change Address
                </button>
              </div>
                    
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${productsInCart.totalPrice}</span>
              </div>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>


    : <div> <TbGardenCartOff className="block mx-auto w-48 h-48 mt-42 text-red-500" /> 
            <h3 className="block text-center text-2xl text-gray-500 py-4">( The cart is empty.)</h3>

    </div> }

    </>
        
      );
}

export default Cart