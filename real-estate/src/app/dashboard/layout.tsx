'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/src/components/AppSidebar';
import Topbar from '@/src/components/Topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col min-w-0">
          <Topbar />

          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            {children}
          </main>
        </div>

      </div>
    </SidebarProvider>
  );
}