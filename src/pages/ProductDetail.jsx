import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { shopData } from "../assets/sampleData"

const ProductDetail = () => {
    const param = useParams()
    const productsData = shopData
    const [product, setProduct] = useState('')

    useEffect(() => {
        const productExist = productsData.find((elem) => elem.id == param.id)
        setProduct(productExist)
    },[])

    return (
        <section className="relative mt-34">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-18">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Product Details */}
                    <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
                        <p className="font-medium text-lg text-indigo-600 mb-4">Travel &nbsp; / &nbsp; Menswear</p>
                        <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">{product.name}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">${product.price}</h6>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" />
                                        </svg>
                                    ))}
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#F3F4F6" />
                                    </svg>
                                </div>
                                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">1624 reviews</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-base font-normal mb-8">
                            The perfect companion for your next adventure! Embrace the spirit of sunny escapades with this vibrant and versatile bag designed to cater to your travel needs while adding a pop of color to your journey.
                        </p>
                        <div className="block w-full">
                            <p className="font-medium text-lg leading-8 text-gray-900 mb-4">Bag Color</p>
                            <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
                                {['#10B981', '#FBBF24', '#F43F5E', '#2563EB'].map((color, i) => (
                                    <button key={i} className={`p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-${color === '#10B981' ? 'emerald' : color === '#FBBF24' ? 'amber' : color === '#F43F5E' ? 'red' : 'blue'}-500 focus-within:border-${color === '#10B981' ? 'emerald' : color === '#FBBF24' ? 'amber' : color === '#F43F5E' ? 'red' : 'blue'}-500`}>
                                        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="20" fill={color} />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            <div className="block w-full mb-6">
                                <p className="font-medium text-lg leading-8 text-gray-900 mb-4">Bag Size</p>
                                <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                                    {['56 cm (S)', '67 cm (M)', '77 cm (L)'].map((size, i) => (
                                        <button key={i} className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                <div className="flex items-center justify-center w-full">
                                    <button className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                        <svg className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text" className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0" placeholder="1" />
                                    <button className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                        <svg className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                                    <svg className="stroke-indigo-600 transition-all duration-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Images */}
                    <div className="">
                        <div className="mb-6">
                        {/* "https://pagedone.io/asset/uploads/1700471851.png" */}
                            <img src={product.imageUrl} alt="Yellow Travel Bag" className="mx-auto object-cover w-130 h-130" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail