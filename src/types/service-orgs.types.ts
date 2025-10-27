import type { ReactNode } from "react";

export interface Info {
  id: number;
  title: string;
  value: string;
}

export interface Item {
  id: number;
  name: string;
  icon: ReactNode;
  info: Info[];
}