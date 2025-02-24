import { useNavigate } from "react-router"

const Order = ({ order }) => {
console.log(order)
  const navigate = useNavigate()

  return (
    <div className="mt-30 p-5">
      <h1 className="text-2xl font-semibold mb-2">Thank you for your Order</h1>
      <p className="mb-4">Your order is succefully Placed. You will get an email shortly.</p>
      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full mt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h2>

              <div className="mb-4">
                <h2 className="block font-medium text-gray-900">
                  Order Summary
                </h2>
                <p className="ml-1 text-sm">Order Number : {order.orderNumber}</p>
              </div>

              <div className="mb-4">
                <h2 className="block font-medium text-gray-900">
                  Shipping Information
                </h2>
                <p className="ml-1 text-sm">{order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.zip_code}</p>
              </div>

              <div className="mb-4">
                <h2 className="block font-medium text-gray-900">
                  Item Ordered
                </h2>
                { order.products.map((product, index)=>(
                  <div key={index} className="flex justify-between ml-1 text-sm">
                    <p>{product.name} <sub className="font-bold">(X{product.quantity})</sub></p>
                    <p><span className="font-bold">$</span>{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      <div className="mb-4">
          <div className="flex justify-between px-5">
            <p className="font-bold">Total Price</p>
            <p><span className="font-bold">$</span>{order.totalPrice}</p>
          </div>
      </div>

        <div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:cursor-pointer mr-6">
            Track Order
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:cursor-pointer" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>


    </div>
  )
}

export default Order