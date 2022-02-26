import { useEffect, useState } from 'react';
import { BlogPostDetailProps } from '.';
import { BlogPost } from '../../shared/types';
import useFetch from 'use-http';
import { useParams } from 'react-router-dom';
import { BlogStore } from '../BlogLanding/useBlogLandingLogic';

const BLOG_STORE_URL =
  'https://raw.githubusercontent.com/hallsamuel90/brik-blog-content/main/blog-posts-store.json';
const BLOG_CONTENT_URL =
  'https://raw.githubusercontent.com/hallsamuel90/brik-blog-content/main/blog-posts';

export const useBlogPostDetailLogic = () => {
  const { id } = useParams();

  const [blogPost, setBlogPost] = useState<BlogPost>();
  const [content, setContent] = useState('');

  const blogStoreFetch = useFetch<BlogStore>(BLOG_STORE_URL);
  const blogContentFetch = useFetch<string>(BLOG_CONTENT_URL);

  const getBlogPostContent = async () => {
    const result = await blogContentFetch.get(`${id}.md`);
    if (blogContentFetch.response.ok) {
      setContent(result);
    }
  };

  const getBlogStore = async () => {
    const result = await blogStoreFetch.get();
    if (blogStoreFetch.response.ok) {
      const blogPost = [result.mainFeaturedBlogPost, ...result.blogPosts].find(
        (post) => id === post.id
      );

      setBlogPost(blogPost);
    }
  };

  useEffect(() => {
    getBlogStore();
    getBlogPostContent();
  }, []);

  return {
    blogPost,
    content,
  };
};
