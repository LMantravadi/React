import "../index.css";
import Task from "./Task";
import { InputComponent } from "./InputComponent";
import ProjectTask, {
  buttonStyle,
  ProjectType,
} from "../utils/ProjectManagementUtils";
import { useRef, useEffect } from "react";

interface ProjectDetails {
  details: ProjectType;
  onProjectSave: (project: ProjectType) => void;
  onTaskSave: (task: ProjectTask) => void;
}

export default function Project({
  details,
  onProjectSave,
  onTaskSave,
}: ProjectDetails) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dueDateInputRef = useRef<HTMLInputElement>(null);
  // const tasksRef = useRef();

  // console.log(`Project - id: ${details.id}`);

  useEffect(() => {
    console.log(details.dueDate);
    if (titleInputRef.current) titleInputRef.current.value = details?.title;
    if (descriptionInputRef.current)
      descriptionInputRef.current.value = details?.description;
    if (dueDateInputRef.current)
      dueDateInputRef.current.value = details?.dueDate;
  }, [details]);

  function onSave() {
    const title = titleInputRef.current!.value;
    const description = descriptionInputRef.current!.value;
    const dueDate = dueDateInputRef.current!.value;
    const tasks = details ? details.tasks : [];

    onProjectSave({
      id: details ? details.id : -1,
      title: title,
      description: description,
      dueDate: dueDate,
      tasks: tasks,
    });
  }

  return (
    <>
      <section id="container" className="text-center p-5 bg-transparent">
        <>
          <section id="project">
            <div id="projectActions" className="text-right mb-10">
              <button className={buttonStyle}>Cancel</button>
              <button className={buttonStyle} onClick={onSave}>
                Save
              </button>
              <header className="text-gray-200 text-left font-bold text-3xl mb-2">
                Project Details
              </header>
            </div>
            <div id="projectDetails" className="text-left">
              <InputComponent
                inputType="text"
                detailType="title"
                value={details.title}
                ref={titleInputRef}
              />

              <InputComponent
                inputType="textarea"
                detailType="description"
                value={details.description}
                ref={descriptionInputRef}
              />

              <InputComponent
                inputType="date"
                detailType="duedate"
                value={details.dueDate}
                ref={dueDateInputRef}
              />
            </div>
          </section>
          {details.id !== -1 && details.tasks && (
            <Task tasks={details.tasks} onAddTask={onTaskSave} />
          )}
        </>
      </section>
    </>
  );
}
