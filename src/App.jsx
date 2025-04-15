import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Product from "./Pages/Product.jsx"
import Movies from "./Project-4/Moives.jsx"
import Profile from "./Pages/Profile.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import Course_details from "./Pages/Course_details.jsx"
import  Navbar  from "./components/Navbar.jsx"


const App = () => {
  return(
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Product/:courseId" element={<Course_details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Movies" element={<Movies />} />
    
    </Routes>
   </Router>
   </> 
  )
}

export default App

