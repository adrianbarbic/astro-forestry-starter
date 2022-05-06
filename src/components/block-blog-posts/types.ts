export type BlogPostProps = {
  name: string;
  published: boolean;
  uri: string;
  image: string;
};

export type BlogPostsFrontmatter = {
  frontmatter: BlogPostProps;
};

export type AllBlogPostProps = {
  allBlogPosts: BlogPostsFrontmatter[];
};
