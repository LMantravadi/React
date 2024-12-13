import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  textOnly: boolean;
  className: string;
  [key: string]: any;
}

export default function Button({
  children,
  textOnly,
  className,
  ...buttonProps
}: ButtonProps) {
  let cssClass = textOnly ? "text-button " : "button ";
  cssClass += className;

  return (
    <button className={cssClass} {...buttonProps}>
      {children}
    </button>
  );
}
