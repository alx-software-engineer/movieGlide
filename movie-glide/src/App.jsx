import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Navigation from './Components/Navigation'
import Layout from './Components/Layout'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} /> 
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/navlinks" element={<Navigation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
