import Button from "./Button";

export default function ProjectsSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercasemd:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add a project</Button>
      </div>

      <ul>
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover: bg-stone-800";

          if (project.id === selectedProjectId)
            cssClass += " bg-stone-800 text-stone-200 font-bold";
          else cssClass += " text-stone-400";
          return (
            <li key={project.id} className={cssClass}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
