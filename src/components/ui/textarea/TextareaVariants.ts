import { cva } from "class-variance-authority";

const baseClass =
  "block w-full p-2.5 mb-2 text-sm rounded-lg outline-1 -outline-offset-1";

const textareaVariants = cva(baseClass, {
  variants: {
    variant: {
      default:
        "text-foreground bg-secondary outline-input-border placeholder-input-placeholder",
    },
    disabled: {
      false: null,
      true: "bg-input/40 outline-input-border/40 text-muted-foreground cursor-not-allowed ",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      disabled: false,
      class: "focus:outline-2 focus:-outline-offset-2 focus:outline-primary/20",
    },
  ],
  defaultVariants: {
    variant: "default",
    disabled: false,
  },
});

export { textareaVariants };
