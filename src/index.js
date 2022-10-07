import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './routes/Home';

import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <main>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </main>
  <footer>
    <p>Workshop des Bases du Dev Web - Formation Skool 24</p>
  </footer>
</BrowserRouter>
);
