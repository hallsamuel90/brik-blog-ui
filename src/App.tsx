import React from 'react';
import { BlogLanding } from './pages/BlogLanding';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import BlogPostDetail from './pages/BlogPostDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="blog" />}></Route>
        <Route path="blog" element={<BlogLanding />}></Route>
        <Route path="blog/:id" element={<BlogPostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
