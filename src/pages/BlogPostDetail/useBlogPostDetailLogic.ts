import { BlogPostDetailProps } from '.';
import { BlogPost } from '../../shared/types';

export const useBlogPostDetailLogic = ({
  blogPost,
}: {
  blogPost: BlogPost;
}): BlogPostDetailProps => {
  // const content = require(`${blogPost.link}`) as string;
  const content = 'temp';

  return {
    blogPost,
    content,
  };
};
