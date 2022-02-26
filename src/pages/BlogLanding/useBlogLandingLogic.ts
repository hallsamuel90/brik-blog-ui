import { useEffect, useState } from 'react';
import { BlogLandingProps } from '.';
import { BlogPost } from '../../shared/types';
import useFetch from 'use-http';

const BLOG_STORE_URL =
  'https://raw.githubusercontent.com/hallsamuel90/brik-blog-content/main/blog-posts-store.json';

export interface BlogStore {
  mainFeaturedBlogPost: BlogPost;
  blogPosts: BlogPost[];
}

export const useBlogLandingLogic = (): BlogLandingProps => {
  const [blogStore, setBlogStore] = useState<BlogStore>();

  const { get, response, loading, error } = useFetch(BLOG_STORE_URL);

  const getBlogStore = async () => {
    const result = await get();
    if (response.ok) {
      setBlogStore(result);
    }
  };

  useEffect(() => {
    getBlogStore();
  }, []);

  return { blogStore, loading };
};
