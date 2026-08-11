import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Membership from './pages/Membership'
import Join from './pages/Join'
import { Properties, PropertyDetail } from './pages/Properties'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import { Privacy, Terms, Disclaimer } from './pages/Legal'

export default function App() {
  return (
    <BrowserRouter basename="/realestate-mock5.io">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="membership" element={<Membership />} />
          <Route path="join" element={<Join />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:id" element={<PropertyDetail />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
