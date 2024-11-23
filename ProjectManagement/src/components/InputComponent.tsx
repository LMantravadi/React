import { forwardRef } from "react";
import { InputProps } from "../utils/ProjectManagementUtils";

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent(props: InputProps, ref) {
    const inputValue =
      props.value && props.inputType === "date"
        ? props.value.toString()
        : props.value;

    return (
      <>
        <p className="mb-2">
          <label className="text-gray-400 text-left font-bold text-xl uppercase">
            {props.detailType}
          </label>
        </p>

        <input
          type={props.inputType}
          defaultValue={inputValue}
          ref={ref}
          className="bg-gray-800 text-gray-300 border border-gray-700 rounded-md py-2 px-4 placeholder-gray-500 mb-5"
          placeholder={"Enter a " + props.detailType}
        />
      </>
    );
  }
);
