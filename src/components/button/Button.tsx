import { ComponentProps, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils.ts";

const buttonVriants = cva(
  "rounded-md border text-white px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black",
  {
    variants: {
      variant: {
        primary: "border-black bg-black",
        danger: "border-red-500 bg-red-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVriants> {
  children: ReactNode;
  className?: string;
}

function Button({ children, variant, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVriants({ variant }), className)}>
      {children}
    </button>
  );
}

export default Button;
