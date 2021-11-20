import { isEmpty } from "lodash-es";

const BlockProjects = ({ content, allProjects }) => {
  const projectsToShow = allProjects.filter((project) => {
    const out = content.projects.filter((doc) => {
      const projectFile = project.file.pathname.split("src/")[1];
      const contentFile = doc.split("src/")[1];

      const link = doc.replace("src/content/", "");
      const newLink = link.replace(".md", "");

      project.link = newLink;
      return projectFile === contentFile && project.published === true;
    });
    const output = isEmpty(out) ? null : out;

    return output;
  });

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projectsToShow.map((project) => (
            <a href={`/projects/${project.uri}`} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={project.image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                  width="1200"
                  height="1200"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BlockProjects };
