import LeftMenu from "./LeftMenu";
import Project from "./Project";
import ProjectTask, {
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

  const isProjectSelected = managedProjects.selectedProjectId != undefined;

  function handleProjectSelection(projectId: number) {
    setManagedProjects((prevState) => {
      return { ...prevState, selectedProjectId: projectId };
    });
  }

  function handleProjectCreation() {
    try {
      setManagedProjects((prevState) => {
        const newProject = {
          ...prevState,
          selectedProjectId: -1,
        };
        return newProject;
      });

      console.log(
        `handleProjectCreation - after: managedProjects.selectedProjectId ${managedProjects.selectedProjectId}`
      );
    } catch {
      throw new Error("could not create a new project");
    }
  }

  function handleProjectSave(newProject: ProjectType) {
    try {
      //update the state with new details
      setManagedProjects((projectsPreviousState) => {
        let maxId: number;
        // generate a new id for the the currently saving project if it's a brand new one
        if (newProject.id === -1) {
          if (!managedProjects.projects.length) newProject.id = 1;
          else {
            maxId = Math.max(
              ...managedProjects.projects
                .map((p) => p.id)
                .filter((id) => id != undefined)
            );
            newProject.id = maxId + 1;
          }
        }

        const updatedProjects = [...projectsPreviousState.projects];

        if (managedProjects.selectedProjectId === -1)
          updatedProjects.push(newProject);
        else
          updatedProjects[managedProjects.selectedProjectId! - 1] = newProject;
        return {
          ...projectsPreviousState,
          selectedProjectId: newProject.id,
          projects: updatedProjects,
        };
      });
    } catch {
      throw new Error("Unable to save");
    }
  }

  function handleTaskSave(newTask: ProjectTask) {
    try {
      const projectIndex = managedProjects.selectedProjectId || 0;
      //create pr update the state with task details
      console.log(`projectIndex: ${projectIndex}`);
      setManagedProjects((projectsPrevState) => {
        console.log(projectsPrevState.projects[projectIndex - 1]);

        const updatedTasks: ProjectTask[] = [
          ...projectsPrevState.projects[projectIndex - 1].tasks,
        ];

        // find if task exists
        const taskIndex = updatedTasks.findIndex((t) => t.id === newTask.id);

        if (taskIndex != -1) {
          //if tasks exists, then update
          updatedTasks[taskIndex] = newTask;
        } else {
          // generate the id for the new task and push it to the task array
          const maxId = Math.max(...updatedTasks.map((t) => t.id));
          newTask.id = maxId + 1;
          updatedTasks.push(newTask);
        }

        console.log(updatedTasks);
        // const updatedProjects = {
        //   ...projectsPrevState.projects,
        //   tasks: updatedTasks,
        // };

        return {
          ...projectsPrevState,
          projects: [{ ...projectsPrevState.projects, tasks: updatedTasks }],
        };
      });
    } catch {
      throw new Error("Unable to save");
    }
  }

  function getProjectList(): ProjectListType[] {
    const list: ProjectListType[] = [];

    try {
      managedProjects.projects.forEach((project) => {
        list.push({ id: project.id, title: project.title });
      });
    } catch {
      throw new Error("Unable to get the project list");
    }

    return list;
  }

  function getSelectedProject() {
    if (managedProjects.selectedProjectId === -1) return getNewProject();

    return managedProjects.projects[managedProjects.selectedProjectId! - 1];
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

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-300 gap-8">
        <div className="container mx-auto p-4 pt-6">
          <h1 className="text-4xl font-bold mb-4">Project Management</h1>
        </div>

        {/* <!-- Menu and Content Row --> */}
        <div className="container mx-auto p-4 flex ">
          {/* <!-- Menu --> */}
          <div className="flex bg-gray-800 p-4 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
            <LeftMenu
              projectList={getProjectList()}
              onProjectSelection={handleProjectSelection}
              onCreateNewProject={handleProjectCreation}
            />
          </div>

          {/* No selected projects message is shown on intial load */}
          {!isProjectSelected && (
            <NoSelectedProject onCreateNewProject={handleProjectCreation} />
          )}
          {isProjectSelected && (
            <div className="flex-1 ml-4 p-4 bg-gray-800 rounded-md">
              <Project
                details={getSelectedProject()}
                onProjectSave={handleProjectSave}
                onTaskSave={handleTaskSave}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
