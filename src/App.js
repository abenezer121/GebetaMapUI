import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sidebar from './components/Admin/Sidebar';
import Dashboard from './pages/admin/Dashboard';
import Index from './pages/LandingPage/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/LandingPage' element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
