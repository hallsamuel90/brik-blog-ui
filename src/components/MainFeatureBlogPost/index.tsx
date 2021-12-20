import { Box, Grid, Link, Paper, Typography } from "@mui/material"
import { BrikTheme } from "../../shared/theme"
import { BlogPost } from "../../shared/types"
import { useTheme } from "@emotion/react"

export interface MainFeatureBlogPostProps {
  blogPost: BlogPost
}

export const MainFeatureBlogPost = ({ blogPost }: MainFeatureBlogPostProps) => {
  const theme = useTheme() as BrikTheme

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${
          blogPost.image.location ?? "/assets/feet-up.png"
        })`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
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
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {blogPost.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {blogPost.preview}
            </Typography>
            <Link
              variant="subtitle1"
              href="#"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              continue reading...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
