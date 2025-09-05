import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Components/FilmDetails'
import ContactUs from './Components/ContactUs'
import Navigation from './Components/Navigation'
import Layout from './Components/Layout'
import NoPageFound from './Components/NoPageFound'
import './App.css';
import MovieDetails from './Components/MovieDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} /> 
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/navlinks" element={<Navigation />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
