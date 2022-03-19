import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Skeleton,
  Typography,
} from '@mui/material';
import { BlogPost } from '../../shared/types';
import { Link as RouterLink } from 'react-router-dom';

export interface BlogPostCardProps {
  blogPost?: BlogPost;
  loading?: boolean;
}

export const BlogPostCard = ({ blogPost, loading }: BlogPostCardProps) => {
  return (
    <Card sx={loading ? { width: 345 } : { maxWidth: 345 }}>
      <CardActionArea onClick={() => console.log('todo')}>
        <Grid container spacing={0}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" component="div">
              {loading ? <Skeleton /> : blogPost?.title}
            </Typography>
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              {loading ? (
                <Skeleton />
              ) : (
                `${blogPost?.publishDate} by ${blogPost?.author}`
              )}
            </Typography>
            <Link
              component={RouterLink}
              to={blogPost?.id || ''}
              underline="hover"
            >
              <Typography variant="body2" color="text.primary">
                {loading ? <Skeleton /> : `${blogPost?.preview}...`}
              </Typography>
            </Link>
          </CardContent>
          {loading ? (
            <Skeleton variant="rectangular" width={110} height={130} />
          ) : (
            <CardMedia
              component="img"
              sx={{ width: 110, display: { xs: 'none', sm: 'block' } }}
              image={blogPost?.image.location}
              alt={blogPost?.image.description}
            />
          )}
        </Grid>
      </CardActionArea>
    </Card>
  );
};
