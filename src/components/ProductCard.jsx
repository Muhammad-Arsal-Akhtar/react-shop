

export const ProductCard = (props) => {
  return (
    <>
        <section id="popular-products" className="pt-20">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-10">Popular products</h2>
                <div className="flex flex-wrap -mx-4">
                
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div className="bg-white p-3 rounded-lg shadow-lg">
                        <img src="assets/images/products/1.jpg" alt="Product 1" className="w-full object-cover mb-4 rounded-lg" />
                        <a href="#" className="text-lg font-semibold mb-2">{props.name}</a>
                        <p className="my-2">Women</p>
                        <div className="flex items-center mb-4">
                        <span className="text-lg font-bold text-primary">$19.99</span>
                        <span className="text-sm line-through ml-2">$24.99</span>
                        </div>
                        <button className="bg-red-500 border border-transparent hover:bg-transparent hover:border-red-500 hover:text-red-500 font-semibold py-2 px-4 rounded-full w-full text-white hover:cursor-pointer">Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
