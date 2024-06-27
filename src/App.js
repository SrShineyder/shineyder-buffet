import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './components/pages/Home'
import Multimedia from './components/pages/Multimedia'
import Contact from './components/pages/Contact'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/multimedia" element={<Multimedia />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
