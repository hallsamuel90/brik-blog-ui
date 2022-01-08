import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogLanding } from '.';

export default {
  title: 'Pages/BlogLanding',
  component: BlogLanding,
  argTypes: {},
} as ComponentMeta<typeof BlogLanding>;

const Template: ComponentStory<typeof BlogLanding> = (args) => (
  <BlogLanding {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mainFeaturedBlogPost: {
    id: 'awesome-blog-post-about-bean-baggz',
    title: 'Awesome Blog Post about Bean Baggz',
    preview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    author: 'Sam Hall',
    publishDate: 'Dec 15, 2021',
    link: 'https://allidoiscode.com',
    image: {
      location: '/assets/feet-up.png',
      description: 'feet-up',
    },
  },
  blogPosts: [
    {
      id: 'im-ron-burgundy',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-1',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-2',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-3',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-4',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-5',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-6',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-7',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
    {
      id: 'im-ron-burgundy-8',
      title: "I'm Ron Burgundy?",
      preview: 'It all started when dinasours roamed the earth.',
      author: 'Sam Hall',
      publishDate: 'December 16th, 2021',
      link: 'public/blog-posts/im-ron-burgundy',
      image: {
        location: '/assets/feet-up.png',
        description: 'feet-up',
      },
    },
  ],
};
