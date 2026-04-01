"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface AppShellProps {
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}

export default function AppShell({ children, headerActions }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header actions={headerActions} />
        <main className="flex-1 overflow-y-auto hide-scrollbar bg-surface">
          {children}
        </main>
      </div>
    </div>
  );
}
