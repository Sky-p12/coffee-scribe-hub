
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 mt-16 ${className}`}>
        {children}
      </main>
    </div>
  );
}

export function PageContainer({ children, className = "" }: ContainerProps) {
  return (
    <div className={`page-container ${className}`}>
      {children}
    </div>
  );
}
