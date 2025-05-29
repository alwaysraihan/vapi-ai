import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const maxWidthClassName =
  "max-w-[min(var(--wrapper-width,82.5rem),(100%-var(--wrapper-padding,4%)*2))]";
const className = cn("w-full", maxWidthClassName, "mx-auto");

export default function RootWrapper(props: ComponentProps<"div">) {
  return <div {...props} className={cn(className, props.className)} />;
}

export { className as rootWrapperClassName };
