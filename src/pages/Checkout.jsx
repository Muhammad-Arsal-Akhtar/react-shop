import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const productsInCart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <div className="bg-gray-100 py-8 mt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4 text-red-500">Checkout</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div id="accordion-collapse">
                  {/* Accordion Item 1 */}
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                      onClick={() => toggleAccordion(1)}
                      aria-expanded={openAccordion === 1}
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span>Billing Information</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 shrink-0 transform ${openAccordion === 1 ? "rotate-180" : ""}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    className={openAccordion === 1 ? "block" : "hidden"}
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                          <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
                          </div>
                          <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" required />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                            <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Phone number" required />
                          </div>

                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <h2 id="accordion-collapse-heading-2">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                      onClick={() => toggleAccordion(2)}
                      aria-expanded={openAccordion === 2}
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span>Shipping Information</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 shrink-0 transform ${openAccordion === 2 ? "rotate-180" : ""}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    className={openAccordion === 2 ? "block" : "hidden"}
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                      <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                          <div>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123 Main St" required />
                          </div>
                          <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New York" required />
                          </div>
                          <div>
                            <label htmlFor="zip_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
                            <input type="text" id="zip_code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10001" required />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <h2 id="accordion-collapse-heading-3">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                      onClick={() => toggleAccordion(3)}
                      aria-expanded={openAccordion === 3}
                      aria-controls="accordion-collapse-body-3"
                    >
                      <span>Payment Method</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 shrink-0 transform ${openAccordion === 3 ? "rotate-180" : ""}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    className={openAccordion === 3 ? "block" : "hidden"}
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                      <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                          <div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                name="default-radio"
                                value="default-radio-1"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-1"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Cash on Delivery
                              </label>
                            </div>

                            <div className="flex items-center">
                              <input
                                id="default-radio-2"
                                type="radio"
                                name="default-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-2"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Debit Card
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
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
                  {/* <span>{address}</span> */}
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
      </div>
    </>

  );
}

export default Checkout