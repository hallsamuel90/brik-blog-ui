export interface BlogPost {
  id: string;
  title: string;
  preview: string;
  publishDate: string;
  author: string;
  link: string;
  image: {
    location: string;
    description: string;
  };
}
