import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import NavBar from './components/layout/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/newproject" element={<NewProject />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
