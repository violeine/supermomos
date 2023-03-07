import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, forwardRef) => {
    return (
      <div className="w-full">
        <input {...props} ref={forwardRef} />
        <span className="text-sm text-red-700">{error}</span>
      </div>
    );
  }
);

Input.displayName = "Input";
