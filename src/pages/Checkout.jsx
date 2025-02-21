import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const productsInCart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const [openAccordion, setOpenAccordion] = useState(null);

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
                      <span>What is Flowbite?</span>
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
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS.
                      </p>
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
                      <span>Is there a Figma file available?</span>
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
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software.
                      </p>
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