import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-line">
    
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap -mx-4">
        
        <div className="w-full sm:w-1/6 px-4 mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul>
            <li><a href="/shop.html" className="hover:text-primary">Shop</a></li>
            <li><a href="/single-product-page.html" className="hover:text-primary">Women</a></li>
            <li><a href="/shop.html" className="hover:text-primary">Men</a></li>
            <li><a href="/single-product-page.html" className="hover:text-primary">Shoes</a></li>
            <li><a href="/single-product-page.html" className="hover:text-primary">Accessories</a></li>
          </ul>
        </div>
        
        <div className="w-full sm:w-1/6 px-4 mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul>
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/cart" className="hover:text-primary">Cart</Link></li>
          </ul>
        </div>
        
        <div className="w-full sm:w-1/6 px-4 mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul>
            <li><a href="/cart.html" className="hover:text-primary">Cart</a></li>
            <li><a href="/register.html" className="hover:text-primary">Registration</a></li>
            <li><a href="/register.html" className="hover:text-primary">Login</a></li>
          </ul>
        </div>
       
        <div className="w-full sm:w-1/6 px-4 mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul>
            <li className="flex items-center mb-2 justify-center">
              {/* <img src="/assets/images/social_icons/facebook.svg" alt="Facebook" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /> */}
              <a href="#" className="hover:text-red-500"><FaFacebook className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /></a>
            </li>
            <li className="flex items-center mb-2 justify-center">
              {/* <img src="/assets/images/social_icons/twitter.svg" alt="Twitter" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /> */}
              <a href="#" className="hover:text-red-500"><FaTwitterSquare className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /></a>
            </li>
            <li className="flex items-center justify-center mb-2">
              {/* <img src="/assets/images/social_icons/instagram.svg" alt="Instagram" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /> */}
              <a href="#" className="hover:text-red-500"><FaInstagram className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /></a>
            </li>
            <li className="flex items-center mb-2 justify-center">
              {/* <img src="/assets/images/social_icons/pinterest.svg" alt="Instagram" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /> */}
              <a href="#" className="hover:text-red-500"><FaPinterest className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /></a>
            </li>
            <li className="flex items-center mb-2 justify-center">
              {/* <img src="/assets/images/social_icons/youtube.svg" alt="Instagram" className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /> */}
              <a href="#" className="hover:text-red-500"><FaYoutube className="w-4 h-4 transition-transform transform hover:scale-110 mr-2" /></a>
            </li>
          </ul>
        </div>
       
        <div className="w-full sm:w-2/6 px-4 mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p><img src="assets/images/template-logo.png" alt="Logo" className="h-[60px] mb-4" /></p>
          <p>123 Street Name, Paris, France</p>
          <p className="text-xl font-bold my-4">Phone: (123) 456-7890</p>
          <a href="mailto:info@company.com" className="underline">Email: info@company.com</a>
        </div>
      </div>
    </div>
  
    
    <div className="py-6 border-t border-gray-line">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        
        <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
          <p className="mb-2 font-bold">&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
          </ul>
          <p className="text-sm mt-4">Your shops description goes here. This is a brief introduction to your shop and what you offer.</p>
        </div>
        
        <div className="w-full lg:w-1/4 text-center lg:text-right">
        <FaCcPaypal className="inline-block h-8 mr-2" />
        <FaCcStripe  className="inline-block h-8 mr-2" />
        <FaCcVisa  className="inline-block h-8 mr-2" />
          {/* <img src="/assets/images/social_icons/paypal.svg" alt="PayPal" className="inline-block h-8 mr-2" />
          <img src="/assets/images/social_icons/stripe.svg" alt="Stripe" className="inline-block h-8 mr-2" />
          <img src="/assets/images/social_icons/visa.svg" alt="Visa" className="inline-block h-8" /> */}
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer