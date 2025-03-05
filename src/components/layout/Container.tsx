
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot-password";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isAuthPage ? '' : 'mt-16'} ${className}`}>
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
