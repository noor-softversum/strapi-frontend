import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Property from './pages/Property'
import ReviewDetails from './pages/ReviewDetails'
import SiteHeader from './components/SiteHeader'

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<HomePage />} /> 
          <Route path="/properties/:id" element={<Property />} />
          <Route path="/reviews/:id" element={<ReviewDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
