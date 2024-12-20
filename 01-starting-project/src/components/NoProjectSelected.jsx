import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectsImage} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select or create a project</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new Project</Button>
      </p>
    </div>
  );
}
