import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { BlogPost } from '../../shared/types';
import { theme } from '../../shared/theme';
import { BlogPostDetailHero } from '../../components/BlogPostDetailHero';
import Markdown from 'markdown-to-jsx';
import { useBlogPostDetailLogic } from './useBlogPostDetailLogic';

export interface BlogPostDetailProps {
  blogPost?: BlogPost;
  content: string;
  loading?: boolean;
}

export const BlogPostDetailPage = ({
  blogPost,
  content,
  loading,
}: BlogPostDetailProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toolbarColor={theme.palette.primary.main} />
        <Container maxWidth="lg">
          <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
            <BlogPostDetailHero
              imageLocation={blogPost?.image.location || ''}
              loading={loading}
            />
          </Box>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            fontWeight="bold"
            gutterBottom
          >
            {loading ? <Skeleton /> : blogPost?.title}
          </Typography>
          {loading ? <Skeleton /> : <Markdown>{content}</Markdown>}
        </Container>
      </ThemeProvider>
    </>
  );
};

const BlogPostDetail = () =>
  BlogPostDetailPage({ ...useBlogPostDetailLogic() });

export default BlogPostDetail;
