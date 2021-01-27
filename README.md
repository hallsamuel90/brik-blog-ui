
## Bigg Healthy Blog ![Production](https://github.com/hallsamuel90/bigg-healthy-blog/workflows/Production/badge.svg) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
A blog about about software engineering and other things that are interesting.

### Built With
* [Gatsby](https://www.gatsbyjs.com/)

## Start Developing
### Prerequisites
* [npm](https://www.npmjs.com/get-npm)

### Install Dependencies

```shell
cd bigg-healthy-blog/
npm install
```

### Run development and start editing!

```shell
npx gatsby develop
```

The blog is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool that can be used to experiment with querying the site's data. Learn more about using this   tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

Make your edits and save your changes, the browser will update in real time!

### Write a Blog Post!

Blog posts are located in the `./content` directory!

#### 1. Write your content in markdown!

> New to markdown? [Read this](https://guides.github.com/features/mastering-markdown/)

> Need Content ideas? [Read this](./writers-guide.md)

---

#### 2. Name your post file name

`YYYY-MM-DD-blog-post-name.md` :point_right: `2016-01-27-post-title-here.md`

> [handy tool for slugifying titles](https://blog.tersmitten.nl/slugify/)

---

#### 3. In your post, include post meta information:

Include the post metadata at the top:

```
---
title: My awesome post title
description: "This post is about awesome stuff!"
date: 2016-07-25
thumbnail: 'http://url-to-thumbnail.jpg'
layout: Post
authors:
  - FirstnameLastname
---
```

Below the post meta, add your markdown:

<pre>
# Post Heading

This is an awesome paragraph!

## Post SubSection

[Link example](http://my-full-url-with-http-at-the-front.com)

* List item 1
* List item 2
* List item 3

```js
// code snippet example with javascript (js) syntax highlighting
console.log('JS code')
```
</pre>

---
    
## Contributing

Submit your blog post! Any contributions you make are **greatly appreciated**.

*Note I'm still working on adding authors to individual posts.*

1. Fork the Project
2. Create your Post Branch (`git checkout -b post/some-sweet-blog-post`)
3. Commit your Changes (`git commit -m 'wrote a sweet blog post!'`)
4. Push to the Branch (`git push origin post/some-sweet-blog-post`)
5. Open a Pull Request

Once the Pull Request is accepted, a new build will kick off and your post will automatically be published to the site.

Make sure npm run build works locally or the build in our CI/CD will fail and the updates won't be visible on the site.

## License

Licensed under Apache2. See `LICENSE` for more information.

## Contact
Sam Hall 
* [@biggHealthy_](https://twitter.com/biggHealthy_) 
* hallsamuel90@gmail.com



