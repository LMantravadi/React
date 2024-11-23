import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCreateNewProject: () => void;
}
export default function Button(
  { children, onCreateNewProject }: Props,
  props: []
) {
  return (
    <>
      <button
        onClick={onCreateNewProject}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        {...props}
      >
        {children}
      </button>
    </>
  );
}
