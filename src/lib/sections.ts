export const SECTIONS = [
  { id: "top",        label: "Start",       dock: "Start",   theme: "dark"  },
  { id: "operations", label: "Operations",  dock: "Ops",     theme: "light" },
  { id: "fleet",      label: "The standard",dock: "Fleet",   theme: "dark"  },
  { id: "cities",     label: "Cities",      dock: "Cities",  theme: "light" },
  { id: "contact",    label: "Contact",     dock: "Contact", theme: "light" },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);
export type SectionId = (typeof SECTIONS)[number]["id"];