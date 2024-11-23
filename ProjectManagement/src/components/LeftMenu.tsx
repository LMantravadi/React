import { useRef } from "react";

import {
  ProjectListType,
  leftMenubuttonStyle,
} from "../utils/ProjectManagementUtils";

interface ProjectList {
  projectList: ProjectListType[];
  onProjectSelection: (projectId: number) => void;
  onCreateNewProject: () => void;
}

export default function LeftMenu({
  projectList,
  onProjectSelection,
  onCreateNewProject,
}: ProjectList) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div>
        <header className="ml-0.5">
          <h2 className="text-2xl text-left font-bold mb-5 ">YOUR PROJECTS</h2>

          <button
            className="text-gray-300 font-bold text-xl text-right bg-gray-600 px-2 w-50 h-10 rounded "
            onClick={onCreateNewProject}
          >
            + Add
          </button>
        </header>
        <ul>
          {projectList &&
            projectList.length > 0 &&
            projectList.map((p) => (
              <li className="h-10 text-left px-5 m-2" key={p.id}>
                <button
                  ref={buttonRef}
                  // className="text-gray-300 hover:bg-gray-700 hover:text-gray-600 text-lg font-bold px-3 m-4 w-30 h-10 rounded "
                  className={leftMenubuttonStyle}
                  onClick={() => onProjectSelection(p.id)}
                >
                  {p.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
