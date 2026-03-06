export const themeColors = {
  primary: "#145073",
  secondary: "#69AFD2",
  background: "#FFFFFF",
  text: "#0B2E42",
};

export const themeFonts = {
  heading: "var(--font-heading, 'FormaDJR Micro', system-ui, sans-serif)",
  subheading: "var(--font-subheading, 'FormaDJR Display', system-ui, sans-serif)",
  body: "var(--font-body, 'FormaDJR Display Thin', system-ui, sans-serif)",
};

/**
 * Maps WordPress color/layout selections to tailwind classes
 * Specifically for the Bento layout grid variants.
 */
export const bentoSizeClasses: Record<"small" | "medium" | "large", string> = {
  small: "col-span-1 md:col-span-1",
  medium: "col-span-2 md:col-span-1",
  large: "col-span-2 md:col-span-2",
};

export const bentoColorVariants = {
  primary: "bg-[#145073] text-white",
  secondary: "bg-[#69AFD2] text-[#0B2E42]",
  light: "bg-gray-100 text-[#0B2E42]",
  white: "bg-white text-[#0B2E42] shadow-sm border border-gray-100",
};
