const BlockBlogPosts = ({ allBlogPosts }) => {
  const blogPostsToShow = allBlogPosts.filter(
    (post) => post.published === true
  );

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {blogPostsToShow.map((post) => (
            <a href={`/blog/${post.uri}`} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={post.image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{post.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BlockBlogPosts };
