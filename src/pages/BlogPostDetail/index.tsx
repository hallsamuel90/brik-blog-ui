import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { BlogPost } from '../../shared/types';
import { theme } from '../../shared/theme';
import { BlogPostDetailHero } from '../../components/BlogPostDetailHero';
import Markdown from 'markdown-to-jsx';

export interface BlogPostDetailProps {
  blogPost: BlogPost;
  content: string;
}

export const BlogPostDetail = ({ blogPost, content }: BlogPostDetailProps) => {
  console.log(content);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toolbarColor={theme.palette.primary.main} />
        <Container maxWidth="lg">
          <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
            <BlogPostDetailHero imageLocation={blogPost.image.location} />
          </Box>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            fontWeight="bold"
            gutterBottom
          >
            {blogPost.title}
          </Typography>
          <Markdown>{content}</Markdown>
        </Container>
      </ThemeProvider>
    </>
  );
};
