import { useEffect, useState } from 'react';
import { BlogLandingProps } from '.';
import { BlogPost } from '../../shared/types';
import useFetch from 'use-http';
import { BLOG_STORE_URL } from '../../env';

export interface BlogStore {
  mainFeaturedBlogPost: BlogPost;
  blogPosts: BlogPost[];
}

export const useBlogLandingLogic = (): BlogLandingProps => {
  const [blogStore, setBlogStore] = useState<BlogStore>();

  const { get, response, loading } = useFetch(BLOG_STORE_URL);

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
