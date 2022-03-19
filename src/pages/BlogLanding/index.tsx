import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { BlogPostCard } from '../../components/BlogPostCard';
import { MainFeatureBlogPost } from '../../components/MainFeatureBlogPost';
import { Navbar } from '../../components/Navbar';
import { BlogPost } from '../../shared/types';
import { theme } from '../../shared/theme';
import { BlogStore, useBlogLandingLogic } from './useBlogLandingLogic';
import { times } from 'lodash';

export interface BlogLandingProps {
  blogStore?: BlogStore;
  loading: boolean;
}

export const BlogLandingPage = ({ blogStore, loading }: BlogLandingProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toolbarColor={theme.palette.primary.main} />
        <Container maxWidth="lg">
          <Box sx={{ paddingTop: 2 }}>
            <MainFeatureBlogPost
              blogPost={blogStore?.mainFeaturedBlogPost}
              loading={loading}
            />
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ paddingTop: 2, paddingBottom: 2 }}
          >
            Latest from the noggin...
          </Typography>
          <Grid container spacing={3}>
            {loading
              ? times(3, () => (
                  <Grid item>
                    <BlogPostCard loading={loading} />
                  </Grid>
                ))
              : blogStore?.blogPosts.map((blogPost) => (
                  <Grid item key={blogPost.title}>
                    <BlogPostCard blogPost={blogPost} loading={loading} />
                  </Grid>
                ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export const BlogLanding = () => BlogLandingPage({ ...useBlogLandingLogic() });

// const BlogPostDetail = ({ blogPost }: { blogPost: BlogPost }) =>
//   BlogPostDetailPage({ ...useBlogPostDetailLogic({ blogPost }) });
