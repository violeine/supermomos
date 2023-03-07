import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import React from "react";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>((props, forwardRef) => {
  return (
    <RadixRadioGroup.Item
      className="w-5 h-5 rounded-full border-gray-300 border 
      hover:bg-[#f4ebff] hover:border-purple 
      data-[state=checked]:bg-[#f4ebff] data-[state=checked]:border-purple"
      {...props}
      ref={forwardRef}
    >
      <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-full after:bg-purple" />
    </RadixRadioGroup.Item>
  );
});

RadioGroupItem.displayName = "RadioGroupItem";

export const RadioGroup = {
  Root: RadixRadioGroup.Root,
  Item: RadioGroupItem,
};
