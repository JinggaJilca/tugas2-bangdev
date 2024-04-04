import Home from "./pages/home"
import About from "./pages/about"
import Product from "./pages/product"
import Contact from "./pages/contact"

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
