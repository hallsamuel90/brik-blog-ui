import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlogPostDetailHero } from '.';

export default {
  title: 'Components/BlogPostDetailHero',
  component: BlogPostDetailHero,
  argTypes: {},
} as ComponentMeta<typeof BlogPostDetailHero>;

const Template: ComponentStory<typeof BlogPostDetailHero> = (args) => (
  <BlogPostDetailHero {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageLocation: '/assets/feet-up.png',
};
