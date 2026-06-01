import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Accessories from './pages/Accessories'
import Single from './pages/Accessories/Single'
import Stack from './pages/Accessories/Stack'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessories"  element={<Accessories />}>
          <Route path="single"  element={<Single />} />
          <Route path="stack" element={<Stack />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
