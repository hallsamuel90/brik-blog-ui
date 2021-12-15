import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BlogPostCard } from "."

export default {
  title: "Components/BlogPostCard",
  component: BlogPostCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BlogPostCard>

const Template: ComponentStory<typeof BlogPostCard> = args => (
  <BlogPostCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: "Awesome Blog Post",
  preview: "You are now reading the greatest blog post ever",
  author: "Sam Hall",
  publishDate: "Dec 15, 2021",
  link: "https://allidoiscode.com",
}
