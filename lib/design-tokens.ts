export const colors = {
  primary: "#145073",
  secondary: "#69AFD2",
  text: "#0B2E42",
  background: "#FFFFFF",
} as const;

export const bentoSizeClasses: Record<"small" | "medium" | "large", string> = {
  small: "col-span-1",
  medium: "col-span-1 md:col-span-2",
  large: "col-span-1 md:col-span-2 lg:col-span-2",
};
