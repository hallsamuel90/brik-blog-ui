import React from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const useStyles = makeStyles((theme) => ({
    cardHeader: {
      color: '#FFFFFF',
      backgroundColor: '#01090F'
    },
    cardSubHeader: {
      color: theme.palette.secondary.main
    },
    cardContent: {
      color: '#01090F',
      backgroundColor: '#FFFFFF',
    }
  }));

  const classes = useStyles();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
        <Box justifyContent="center" flexDirection="column">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <React.Fragment>
              <Box mb={2}>
              <Card>
                <CardActionArea>
                  <Link to={post.fields.slug} itemProp="url" style={{ textDecoration: 'none' }}>
                    <CardHeader title={title}
                      subheader={
                        <small className={classes.cardSubHeader}>{post.frontmatter.date}</small>
                      }
                      className={classes.cardHeader}
                      >
                    </CardHeader>
                    <CardContent className={classes.cardContent}>
                      <Typography component="p">
                        {post.frontmatter.description || post.excerpt},
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
              </Box>
            </React.Fragment>
          )
        })}
        </Box>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
