// /components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <span className="text-2xl font-semibold">Bank Dashboard</span>
    </div>
    <div>
      <Link href="/dashboard/overview" className="px-4 hover:text-yellow-300 transition-colors duration-300">
        Overview
      </Link>
      <Link href="/dashboard/transactions" className="px-4 hover:text-yellow-300 transition-colors duration-300">
        Transactions
      </Link>
      <Link href="/dashboard/settings" className="px-4 hover:text-yellow-300 transition-colors duration-300">
        Settings
      </Link>
    </div>
  </nav>
);

export default Navbar;
