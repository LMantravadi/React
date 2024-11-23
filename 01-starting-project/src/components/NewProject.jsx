import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const titleInput = titleRef.current.value;
    const descriptionInput = descriptionRef.current.value;
    const dueDateInput = dueDateRef.current.value;

    if (
      titleInput.trim() === "" ||
      descriptionInput.trim() === "" ||
      dueDateInput.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onSave({
      title: titleInput,
      description: descriptionInput,
      dueDate: dueDateInput,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonLabel="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">All entries are required</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hoer:text-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="title" type="text" ref={titleRef} />
          <Input label="description" textArea ref={descriptionRef} />
          <Input label="due date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}
