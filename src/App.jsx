import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Businesses from './pages/Businesses'
import Partners from './pages/Partners'
import Journey from './pages/Journey'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}