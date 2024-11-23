import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

interface Props {
  onCreateNewProject: () => void;
}
export default function NoSelectedProject({ onCreateNewProject }: Props) {
  return (
    <div className="text-center flex-auto">
      <img src={noProjectImage} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select or create a project</p>
      <p className="mt-8">
        <Button onCreateNewProject={onCreateNewProject}>
          Create a new project
        </Button>
      </p>
    </div>
  );
}
