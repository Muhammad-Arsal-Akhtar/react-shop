import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [order, setOrder] = useState(null)

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact/>}  />
            <Route path='/about' element={<About/>}  />
            <Route path='/cart' element={<Cart/>}  />
            <Route path='/checkout' element={<Checkout setOrder={setOrder} />}  />
            <Route path='/order' element={<Order order={order} />} />
            <Route path='/filter-data' element={<FilterData />} />
            <Route path='/product-detail/:id' element={<ProductDetail />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
