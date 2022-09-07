import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import NotFound from './pages/notFound/NotFound'
import Operators from './pages/operators/Operators'
import Navbar from './components/Navbar'
import Rules from './pages/rules/Rules'
import Agenda from './pages/agenda/Agenda'
import Loadout from './pages/loadout/Loadout'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='operators' element={<Operators/>}/>
        <Route path='rules' element={<Rules/>}/>
        <Route path='agenda' element={<Agenda/>}/>
        <Route path='loadout' element={<Loadout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
