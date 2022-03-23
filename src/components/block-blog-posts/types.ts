export type BlogPostProps = {
  name: string;
  published: boolean;
  uri: string;
  image: string;
};

export type AllBlogPostProps = {
  allBlogPosts: BlogPostProps[];
};
