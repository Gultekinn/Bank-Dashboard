// /app/page.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Your Bank Dashboard</h1>
        <p className="text-xl mb-6">Manage your account, check transactions, and customize settings all in one place.</p>
        {/* Dashboard sayfasına yönlendiren buton */}
        <Link href="/dashboard" className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-300">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
