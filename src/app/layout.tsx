// /app/layout.tsx
import { ReactNode } from 'react';
import './globals.css'; // Global stiller
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body className="min-h-screen bg-gray-100">
    <Navbar/>
     
      <div className="flex">
        {/* Sidebar bileşeni */}
      
        {/* Sayfa içeriği */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </body>
  </html>
);

export default Layout;
