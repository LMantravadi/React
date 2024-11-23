import LeftMenu from "./LeftMenu";
import Project from "./Project";
import {
  // ProjectData as Data,
  ProjectType,
  ProjectListType,
} from "../utils/ProjectManagementUtils";
import { useState } from "react";
import NoSelectedProject from "./NoSelectedProject";

interface ManagedProjects {
  selectedProjectId: number | undefined;
  projects: ProjectType[];
}
export default function Dashboard() {
  const [managedProjects, setManagedProjects] = useState<ManagedProjects>({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(managedProjects);

  let isNewProject: boolean | undefined;

  function handleProjectSelection(projectId: number) {
    const selectedIndex = managedProjects.projects.findIndex(
      (p) => p.id === projectId
    );

    console.log(`Project Id: ${projectId} - Found at index: ${selectedIndex}`);
    // if (selectedIndex != -1)
    setManagedProjects((prevState) => {
      return { ...prevState, selectedProjectId: projectId };
    }); //TODO
  }

  function getProjectList(): ProjectListType[] {
    const list: ProjectListType[] = [];

    managedProjects.projects.forEach((project) => {
      list.push({ id: project.id ?? -1, title: project.title });
    });

    return list;
  }

  function getSelectedProject() {
    return managedProjects.projects[managedProjects.selectedProjectId!];
  }

  function getNewProject() {
    const newProject: ProjectType = {
      id: -1,
      title: "",
      description: "",
      dueDate: "",
      tasks: [],
    };

    return newProject;
  }

  function handleProjectCreation() {
    try {
      isNewProject = true;
      console.log(`isNewProject: ${isNewProject}`);
      setManagedProjects((prevState) => {
        console.log("prevState: " + prevState.projects);
        const newProject = {
          ...prevState,
          projects: [...prevState.projects, getNewProject()],
        };
        // console.log("new project: " + newProject.projects);
        return newProject;
      });
      console.log(
        "after adding a new empty project" + managedProjects.projects
      );
    } catch {
      throw new Error("could not create a new project");
    }
  }

  const showNoProjectComponent =
    managedProjects.projects &&
    managedProjects.projects.length === 0 &&
    !isNewProject;

  const showProjectComponent =
    managedProjects.projects.length > 0 ||
    (managedProjects.projects.length === 0 && isNewProject);

  function handleProjectSave(newProject: ProjectType) {
    try {
      setManagedProjects((projectsPreviousState) => {
        const projectIndex = projectsPreviousState.projects.findIndex(
          (p) => p.id === newProject.id
        );

        const maxId = Math.max(
          ...projectsPreviousState.projects
            .map((p) => p.id)
            .filter((id) => id !== undefined && id !== null)
        );

        console.log(`maxId: ${maxId} projectIndex: ${projectIndex}`);

        //if (projectIndex != -1) {
        // if the project looking for is found
        console.log(
          `maxId < 0: ${maxId < 0} - Project Index - ${projectIndex}`
        );
        newProject.id = maxId < 0 ? 1 : maxId + 1;

        // projectsPreviousState.projects[projectIndex] = newProject;
        // }

        isNewProject = false;
        //return projectsPreviousState;
        const updatedProjects = [...projectsPreviousState.projects];
        updatedProjects[projectIndex] = newProject;

        console.log(`Updated Project in State: ${updatedProjects}`);
        return {
          ...projectsPreviousState,
          selectedProjectId: projectIndex,
          projects: updatedProjects,
        };
      });
    } catch {
      throw new Error("Unable to save");
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-300 gap-8">
        <div className="container mx-auto p-4 pt-6">
          <h1 className="text-4xl font-bold mb-4">Project Management</h1>
        </div>

        {/* <!-- Menu and Content Row --> */}
        <div className="container mx-auto p-4 flex justify-between">
          {/* <!-- Menu --> */}
          <div className="flex bg-gray-800 p-4 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
            <LeftMenu
              projectList={getProjectList()}
              onProjectSelection={handleProjectSelection}
              onCreateNewProject={handleProjectCreation}
            />
          </div>

          {/* No selected projects message is shown on intial load */}
          {showNoProjectComponent && (
            <NoSelectedProject onCreateNewProject={handleProjectCreation} />
          )}
          {showProjectComponent && (
            <div className="flex-1 ml-4 p-4 bg-gray-800 rounded-md">
              <Project
                details={getSelectedProject()}
                onProjectSave={handleProjectSave}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// {(managedProjects.selectedProjectId ||
//   managedProjects.projects.length) && (
//   <div className="flex-1 ml-4 p-4 bg-gray-800 rounded-md">
//     <Project
//       details={getSelectedProject()}
//       onProjectSave={handleProjectSave}
//     />
//   </div>
// )}
