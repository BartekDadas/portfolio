import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "lib/utils";
import { ButtonProps } from "types";

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-white-a700 text-[16px] font-bold bg-black-900 rounded-[20px]",
  {
    variants: {
      fill: {
        black_900: "bg-black-900 text-white-a700",
      },
      size: {
        xs: "h-[40px] px-3.5 text-[16px]",
      },
      shape: {
        round: "rounded-[20px]",
      },
    },
    defaultVariants: {},
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = "black_900",
      variant = "fill",
      shape,
      size = "xs",
      children,
      leftIcon,
      rightIcon,
      className,
      onClick,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp 
        className={cn(buttonVariants({ [variant]: colorScheme, size, shape, className }))} 
        onClick={onClick} 
        ref={ref} 
        {...props}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };