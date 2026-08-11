import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import People from './pages/People'
import Community from './pages/Community'
import Apply from './pages/Apply'
import { Opportunities, OpportunityDetail } from './pages/Opportunities'
import Partners from './pages/Partners'
import PartnerWithUs from './pages/PartnerWithUs'
import Journal from './pages/Journal'
import Conversation from './pages/Conversation'
import GetInvolved from './pages/GetInvolved'
import { Privacy, Terms, Disclaimer } from './pages/Legal'

export default function App() {
  return (
    <BrowserRouter basename="/realestate-mock5.io">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="community" element={<Community />} />
          <Route path="apply" element={<Apply />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="opportunities/:id" element={<OpportunityDetail />} />
          <Route path="partners" element={<Partners />} />
          <Route path="partner-with-us" element={<PartnerWithUs />} />
          <Route path="journal" element={<Journal />} />
          <Route path="conversation" element={<Conversation />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
