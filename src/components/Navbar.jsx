import { useState } from "react";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import Register from "../components/Register";
import Modal from "../components/Modal";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getSearchedProducts } from "../redux/productSlice";

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search, setSearch] = useState("");

  const productInCartCount = useSelector(state => state.cart.productsInCart)

  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const handleSearch = () => {
    dispatch(getSearchedProducts(search))
    navigate('/filter-data')
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          {/* Top Section: Logo, Search Bar, Icons */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-gray-800">
              LOGO
            </a>

            {/* Search Bar with Icon */}
            <div className="hidden sm:flex flex-1 mx-4 relative">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 hover:cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleSearch()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                ></path>
              </svg>
            </div>

            {/* Icons & Buttons */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon with Badge */}
              <button className="relative">

                <FaShoppingCart className="w-8 h-8 text-gray-700" /> {/* Increased icon size */}
                {(productInCartCount.length > 0) && (<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {productInCartCount.length}
                </span>)}

              </button>

              {/* Login Button */}
              <Link href="#" className="px-4 py-2 text-gray-700 hover:text-red-600"
                onClick={() => {
                  setIsOpen(true)
                  setIsLogin(true)
                }}
              >
                Login
              </Link>

              {/* Register Button */}
              <Link
                href="#"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => {
                  setIsOpen(true)
                  setIsLogin(false)
                }}
              >
                Register
              </Link>
            </div>
          </div>

          {/* Navigation Links (Below Top Section) */}
          <div className="mt-3 flex justify-center space-x-8 border-t pt-3">
            <Link to="/" className="text-gray-700 font-medium hover:text-red-600">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 font-medium hover:text-red-600">
              Shop
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-red-600">
              Contact
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-red-600">
              About
            </Link>
          </div>
        </div>
      </nav>


      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headerContent={isLogin ? 'Login' : 'Register'}>
        {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
      </Modal>
    </>
  );

};

export default Navbar