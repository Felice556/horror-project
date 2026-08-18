import type { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  backgroundImage: string;
  mobileBackgroundImage?: string;
  children: ReactNode;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}