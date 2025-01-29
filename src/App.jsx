import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
