"use client"
import { LayoutDashboard } from 'lucide-react';

const Overview = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-900">Overview</h1>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Account Balance</h3>
          <p className="text-2xl mt-2 text-green-600">$3,520.85</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Recent Transactions</h3>
          <ul className="mt-2 space-y-3">
            <li className="flex justify-between">
              <span>Transfer to John</span>
              <span className="text-gray-500">$150.00</span>
            </li>
            <li className="flex justify-between">
              <span>Deposit from Payroll</span>
              <span className="text-gray-500">$2,000.00</span>
            </li>
            <li className="flex justify-between">
              <span>Utility Bill</span>
              <span className="text-gray-500">-$120.00</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Account Details</h3>
          <p className="text-gray-500 mt-2">Name: Jane Doe</p>
          <p className="text-gray-500">Account Number: 2345 6789 0123</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
