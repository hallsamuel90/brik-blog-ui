import {
  Card,
  CardActionArea,
  CardContent,
  Link,
  Typography,
} from "@mui/material"
import { BlogPost } from "../../shared/types"

export interface BlogPostCardProps {
  blogPost: BlogPost
}

export const BlogPostCard = ({ blogPost }: BlogPostCardProps) => {
  const { title, publishDate, author, link, preview } = blogPost

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => console.log("todo")}>
        <CardContent>
          <Typography variant="h6" component="div">
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
      </CardActionArea>
    </Card>
  )
}
