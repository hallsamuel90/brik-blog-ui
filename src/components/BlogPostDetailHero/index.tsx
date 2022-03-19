import React from 'react';
import { Box, Grid, Link, Paper, Skeleton, Typography } from '@mui/material';
import { BrikTheme } from '../../shared/theme';
import { BlogPost } from '../../shared/types';
import { useTheme } from '@emotion/react';

export interface BlogPostDetailHeroProps {
  imageLocation: string;
  loading?: boolean;
}

export const BlogPostDetailHero = ({
  imageLocation,
  loading,
}: BlogPostDetailHeroProps) => {
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
            backgroundImage: `url(${imageLocation})`,
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
              ></Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};
