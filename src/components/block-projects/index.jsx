import { isEmpty } from "lodash-es";

const BlockProjects = ({ content, allProjects }) => {
  const projectsToShow = allProjects.filter((project) => {
    const out = content.projects.filter((doc) => {
      const projectFile = project.file.split("src/")[1];
      const contentFile = doc.split("src/")[1];
      const newLink = doc.replace(/^src\/|content\/|.md/g, "");
      project.frontmatter.link = newLink;
      return (
        projectFile === contentFile && project.frontmatter.published === true
      );
    });
    const output = isEmpty(out) ? null : out;

    return output;
  });

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {projectsToShow.map((project) => (
            <div key={project.frontmatter.name} className="relative group">
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3">
                <img
                  src={project.frontmatter.image}
                  alt={project.frontmatter.name}
                  className="object-cover object-center"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
                <div
                  className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-filter backdrop-blur">
                    View Project
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href={`/projects/${project.frontmatter.uri}/`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.frontmatter.name}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BlockProjects };
