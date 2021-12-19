import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BlogLanding } from "."

export default {
  title: "Pages/BlogLanding",
  component: BlogLanding,
  argTypes: {},
} as ComponentMeta<typeof BlogLanding>

const Template: ComponentStory<typeof BlogLanding> = args => (
  <BlogLanding {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  mainFeaturedBlogPost: {
    title: "I'm Ron Burgundy?",
    preview: "It all started when dinasours roamed the earth.",
    author: "Sam Hall",
    publishDate: "December 16th, 2021",
    link: "public/blog-posts/im-ron-burgundy",
  },
  blogPosts: [
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
    {
      title: "I'm Ron Burgundy?",
      preview: "It all started when dinasours roamed the earth.",
      author: "Sam Hall",
      publishDate: "December 16th, 2021",
      link: "public/blog-posts/im-ron-burgundy",
    },
  ],
}
