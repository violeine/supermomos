import * as _Checkbox from "@radix-ui/react-checkbox";
import * as React from "react";
import { Check } from "@/ui/icons";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof _Checkbox.Root>,
  React.ComponentPropsWithoutRef<typeof _Checkbox.Root>
>((props, forwardRef) => {
  return (
    <_Checkbox.Root
      className="h-5 w-5 rounded border border-gray-300 hover:border-purple hover:bg-[#f4ebff] flex items-center justify-center data-[state=checked]:bg-[#f4ebff] data-[state=checked]:border-purple"
      {...props}
      ref={forwardRef}
    >
      <_Checkbox.Indicator className="text-purple flex items-center ">
        <Check size={14} />
      </_Checkbox.Indicator>
    </_Checkbox.Root>
  );
});

Checkbox.displayName = "Checkbox";
