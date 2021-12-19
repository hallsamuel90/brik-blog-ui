import { ThemeProvider } from "@emotion/react"
import { Box, Container, Grid, Typography } from "@mui/material"

import { BlogPostCard } from "../../components/BlogPostCard"
import { MainFeatureBlogPost } from "../../components/MainFeatureBlogPost"
import { Navbar } from "../../components/Navbar"
import { BlogPost } from "../../shared/types"
import { theme } from "../../shared/theme"

export interface BlogLandingProps {
  mainFeaturedBlogPost: BlogPost
  blogPosts: BlogPost[]
}

export const BlogLanding = ({
  mainFeaturedBlogPost,
  blogPosts,
}: BlogLandingProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toolbarColor={theme.palette.primary.main} />
        <Container maxWidth="lg">
          <Box sx={{ paddingTop: 2 }}>
            <MainFeatureBlogPost blogPost={mainFeaturedBlogPost} />
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ paddingTop: 2, paddingBottom: 2 }}
          >
            Latest from the noggin...
          </Typography>
          <Grid container spacing={3}>
            {blogPosts.map(blogPost => (
              <Grid item>
                <BlogPostCard blogPost={blogPost} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}
