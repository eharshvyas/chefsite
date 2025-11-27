import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

// Variants + sizes
type ButtonVariant = 
  | "default" 
  | "destructive" 
  | "outline" 
  | "secondary" 
  | "ghost" 
  | "link"

type ButtonSize = 
  | "default" 
  | "sm" 
  | "lg" 
  | "icon" 
  | "icon-sm" 
  | "icon-lg"

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

/* ---------------------------
   Variant Classes
--------------------------- */
const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-himalayan-blue text-white hover:bg-royal-blue shadow-lg",
  destructive:
    "bg-destructive text-white hover:bg-destructive/90 shadow-lg",
  outline:
    "border-2 border-himalayan-blue bg-white text-himalayan-blue hover:bg-himalayan-blue hover:text-white shadow-md",
  secondary:
    "bg-mountain-teal text-white hover:bg-valley-green shadow-lg",
  ghost:
    "text-himalayan-blue hover:bg-himalayan-blue/10 hover:text-royal-blue",
  link:
    "text-himalayan-blue underline-offset-4 hover:underline hover:text-royal-blue shadow-none"
}

/* ---------------------------
   Size Classes
--------------------------- */
const sizeClasses: Record<ButtonSize, string> = {
  default: "h-12 px-8 py-3 text-base has-[>svg]:px-6",
  sm: "h-10 px-6 text-sm rounded-lg has-[>svg]:px-4",
  lg: "h-14 px-10 text-lg rounded-xl has-[>svg]:px-8",
  icon: "size-12",
  "icon-sm": "size-10",
  "icon-lg": "size-14"
}

/* ---------------------------
   Base Button Classes
--------------------------- */
const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 " +
  "focus-visible:ring-4 focus-visible:ring-himalayan-blue/30 " +
  "hover:shadow-xl active:scale-95"

/* ---------------------------
   Component
--------------------------- */
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  )
}

export { Button }
export type { ButtonProps }
