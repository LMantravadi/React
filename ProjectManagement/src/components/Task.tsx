import { useEffect, useRef } from "react";
import ProjectTask from "../utils/ProjectManagementUtils";

interface TaskProps {
  tasks: ProjectTask[];
  onAddTask: (task: ProjectTask) => void;
}
export default function Task({ tasks, onAddTask }: TaskProps) {
  const taskNameRef = useRef<HTMLInputElement>(null);

  function handleDeleteTask() {}

  function handleAddTask() {
    const projectTask: ProjectTask = {
      id: -1,
      name: taskNameRef.current!.value,
    };
    onAddTask(projectTask);
  }
  console.log("Tasks loading...");
  return (
    <>
      {tasks && (
        <section id="tasks" className="text-left border-t-2 border-gray-200">
          <header className="text-gray-200 text-left font-bold text-3xl mb-5 mt-5">
            Tasks
          </header>
          <input
            id="taskInput"
            type="text"
            ref={taskNameRef}
            className="bg-gray-800 text-gray-300 border border-gray-700 rounded-md py-2 px-4 placeholder-gray-500 mb-6"
            placeholder="Add a new task here..."
          />
          <button
            className="text-grey-100 hover:bg-gray-600 font-bold text-lg px-3 m-4 w-30 h-10 rounded "
            onClick={handleAddTask}
          >
            + Add a Task
          </button>

          <table className="text-left border-2  w-4/5 border-gray-200">
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="odd:bg-gray-700 even:bg-gray-800 hover:bg-gray-900 "
                >
                  <td>
                    <label
                      key={task.id}
                      className="text-gray-400 text-left font-bold text-xl ml-5"
                    >
                      {task.name}
                    </label>
                  </td>
                  <td>
                    <button
                      className="text-white hover:bg-gray-600 font-bold text-lg px-3 m-4 w-30 h-10 rounded"
                      onClick={handleDeleteTask}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
