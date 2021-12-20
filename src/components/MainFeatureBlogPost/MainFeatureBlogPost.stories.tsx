import { ComponentMeta, ComponentStory } from "@storybook/react"
import { MainFeatureBlogPost } from "."

export default {
  title: "Components/MainFeatureBlogPost",
  component: MainFeatureBlogPost,
  argTypes: {},
} as ComponentMeta<typeof MainFeatureBlogPost>

const Template: ComponentStory<typeof MainFeatureBlogPost> = args => (
  <MainFeatureBlogPost {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  blogPost: {
    title: "Awesome Blog Post",
    preview: "You are now reading the greatest blog post ever",
    author: "Sam Hall",
    publishDate: "Dec 15, 2021",
    link: "https://allidoiscode.com",
    image: {
      location: "/assets/feet-up.png",
      description: "feet-up",
    },
  },
}
