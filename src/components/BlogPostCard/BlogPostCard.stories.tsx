import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlogPostCard } from '.';

export default {
  title: 'Components/BlogPostCard',
  component: BlogPostCard,
  argTypes: {},
} as ComponentMeta<typeof BlogPostCard>;

const Template: ComponentStory<typeof BlogPostCard> = (args) => (
  <BlogPostCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  blogPost: {
    id: 'awesome-blog-post',
    title: 'Awesome Blog Post',
    preview: 'You are now reading the greatest blog post ever',
    author: 'Sam Hall',
    publishDate: 'Dec 15, 2021',
    link: 'https://allidoiscode.com',
    image: {
      location: '/assets/feet-up.png',
      description: 'feet-up',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  blogPost: undefined,
  loading: true,
};
