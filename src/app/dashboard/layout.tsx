// /app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gray-100">
    <div className="flex">
      <Sidebar/>
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

export default DashboardLayout;
