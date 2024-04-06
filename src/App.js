import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import MacPage from './MacPage';
import iPadPage from './iPadPage';
import './App.css';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<iPadPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
