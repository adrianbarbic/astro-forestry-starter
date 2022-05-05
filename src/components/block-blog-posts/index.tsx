import type { AllBlogPostProps } from "./types";

const BlockBlogPosts = ({ allBlogPosts }: AllBlogPostProps) => {
  const blogPostsToShow = allBlogPosts.filter(
    (post) => post.frontmatter.published === true
  );

  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {blogPostsToShow.map((post) => (
            <div
              key={post.frontmatter.name}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <a
                  href={`/blog/${post.frontmatter.uri}`}
                  aria-label={post.frontmatter.name}
                >
                  <img
                    className="object-cover w-full h-48"
                    src={post.frontmatter.image}
                    alt={post.frontmatter.name}
                    width="1200"
                    height="780"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a
                    href={`/blog/${post.frontmatter.uri}`}
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.frontmatter.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">Philip Fry</span>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={post.frontmatter.image}
                        alt="Philip Fry"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">
                        Philip Fry
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="Mar 10, 2020">Mar 10, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BlockBlogPosts };
