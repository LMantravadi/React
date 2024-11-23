import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modalRef = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleTaskSave() {
    if (enteredTask.trim("") === "") {
      modalRef.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
    // onAdd(taskRef.current.value);
  }
  return (
    <>
      <Modal ref={modalRef} buttonLabel="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">Enter a description for task</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
          onChange={handleChange}
          // ref={taskRef}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleTaskSave}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
