import React from 'react';
import { Box, Grid, Link, Paper, Skeleton, Typography } from '@mui/material';
import { BrikTheme } from '../../shared/theme';
import { BlogPost } from '../../shared/types';
import { useTheme } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';

export interface MainFeatureBlogPostProps {
  blogPost?: BlogPost;
  loading?: boolean;
}

export const MainFeatureBlogPost = ({
  blogPost,
  loading,
}: MainFeatureBlogPostProps) => {
  const theme = useTheme() as BrikTheme;

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" height={400} />
      ) : (
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            mb: theme.spacing(1),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${blogPost?.image.location})`,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                  minHeight: 350,
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {blogPost?.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {blogPost?.preview}
                </Typography>
                <Link
                  component={RouterLink}
                  variant="subtitle1"
                  to={blogPost?.id || ''}
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  continue reading...
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};
