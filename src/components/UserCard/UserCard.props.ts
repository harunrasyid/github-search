import type { ReactNode } from "react";

export interface IUserCardProps {
  name: string;
  isOpen?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
