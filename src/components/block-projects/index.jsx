import { isEmpty } from "lodash";

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
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projectsToShow.map((project) => (
            <a href={`/projects/${project.uri}`} class="group">
              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={project.image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  class="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">{project.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BlockProjects };
