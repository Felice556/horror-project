import type { ReactNode } from "react";

export interface SectionProps {
  backgroundImage: string;
  mobileBackgroundImage?: string;
  children: ReactNode;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}