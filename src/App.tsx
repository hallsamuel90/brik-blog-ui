import React from 'react';
import { BlogLanding } from './pages/BlogLanding';
import { blogPostsStore } from './pages/BlogLanding/blogPostsStore';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { useBlogPostDetailLogic } from './pages/BlogPostDetail/useBlogPostDetailLogic';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/blog-posts" />}></Route>
        <Route
          path="blog-posts/:id"
          element={
            <BlogPostDetail
              {...useBlogPostDetailLogic({
                blogPost: blogPostsStore.mainFeaturedBlogPost,
              })}
            />
          }
        />
        <Route
          path="blog-posts"
          element={<BlogLanding {...blogPostsStore} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
