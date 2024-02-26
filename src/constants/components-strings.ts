export const buttonString = `import { cn } from "@/app/util/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded text-sm font-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        ghost: "bg-transparent text-white hover:opacity-60",
        black:
          "bg-black text-white shadow hover:bg-opacity-60 border-black focus-visible:outline-white  focus-visible:outline-none",
        white:
          "bg-white text-black shadow hover:bg-opacity-60 border-white focus-visible:outline-black  focus-visible:outline-none",
        green:
          "bg-green-600 text-white shadow hover:bg-opacity-60 border-green-600 focus-visible:outline-green-400  focus-visible:outline-none",
        red: "bg-red-600 text-white shadow hover:bg-opacity-60 border-green-600 focus-visible:outline-red-400  focus-visible:outline-none",
        blue: "bg-blue-600 text-white shadow hover:bg-opacity-60 border-green-600 focus-visible:outline-blue-400  focus-visible:outline-none",
      },

      size: {
        small: "h-6 px-2 ",
        medium: "h-8 px-4 py-2",
        large: "h-10 px-6",
        square: "size-8",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "medium",
    },
  }
);

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  );
};

export default Button;
export { buttonVariants };

`;
