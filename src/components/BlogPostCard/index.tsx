import { Card, CardContent, Link, Typography } from "@mui/material"

export interface BlogPostCardProps {
  title: string
  preview: string
  publishDate: string
  author: string
  link: string
}

export const BlogPostCard = ({
  title,
  preview,
  publishDate,
  author,
  link,
}: BlogPostCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle2" color="text.secondary">
          {publishDate} by {author}
        </Typography>
        <Link href={link} underline="hover">
          <Typography variant="body2" color="text.primary">
            {`${preview}...`}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
