import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/css/main.scss'; // All of our styles
import About from './pages/About';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const { PUBLIC_URL } = process.env;

// These small pages load synchronously to match react-snap's prerendered HTML.
const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;
