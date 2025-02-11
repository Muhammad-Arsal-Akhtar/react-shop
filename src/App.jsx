import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact/>}  />
            <Route path='/about' element={<About/>}  />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
