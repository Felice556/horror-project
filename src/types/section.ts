import type { ReactNode } from "react";

export interface SectionProps {
  backgroundImage: string;
  children: ReactNode;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}