import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { BlogPost } from '../../shared/types';

export interface BlogPostCardProps {
  blogPost: BlogPost;
}

export const BlogPostCard = ({ blogPost }: BlogPostCardProps) => {
  const { id, title, publishDate, author, link, preview, image } = blogPost;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => console.log('todo')}>
        <Grid container spacing={0}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              {publishDate} by {author}
            </Typography>
            <Link href={id} underline="hover">
              <Typography variant="body2" color="text.primary">
                {`${preview}...`}
              </Typography>
            </Link>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 110, display: { xs: 'none', sm: 'block' } }}
            image={image.location}
            alt={image.description}
          />
        </Grid>
      </CardActionArea>
    </Card>
  );
};
