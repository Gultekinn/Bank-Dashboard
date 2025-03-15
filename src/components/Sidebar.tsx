"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Settings, CreditCard, LayoutDashboard, User,  FileText, ArrowRight } from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen ${collapsed ? 'w-20' : 'w-64'} bg-blue-900 text-white p-6 transition-all duration-300 shadow-lg`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className={`text-2xl font-bold ${collapsed ? 'text-center' : 'pl-4'}`}>
          {!collapsed && 'Bank Dashboard'}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white focus:outline-none transition-transform duration-300"
        >
          <ChevronLeft
            className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <ul className="space-y-6">
        {/* Overview */}
        <li>
          <Link href="/dashboard/overview">
            <div className="flex items-center py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              {!collapsed && (
                <LayoutDashboard className="transition-all duration-300" />
              )}
              {!collapsed && (
                <span className="ml-4 text-lg font-medium transition-all duration-300">
                  Overview
                </span>
              )}
            </div>
          </Link>
        </li>

        {/* Transactions */}
        <li>
          <Link href="/dashboard/transactions">
            <div className="flex items-center py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              {!collapsed && (
                <CreditCard className="transition-all duration-300" />
              )}
              {!collapsed && (
                <span className="ml-4 text-lg font-medium transition-all duration-300">
                  Transactions
                </span>
              )}
            </div>
          </Link>
        </li>

        {/* Account Details */}
        <li>
          <Link href="/dashboard/account">
            <div className="flex items-center py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              {!collapsed && (
                <User className="transition-all duration-300" />
              )}
              {!collapsed && (
                <span className="ml-4 text-lg font-medium transition-all duration-300">
                  Account Details
                </span>
              )}
            </div>
          </Link>
        </li>

        {/* Transfers */}
        <li>
          <Link href="/dashboard/transfer">
            <div className="flex items-center py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              {!collapsed && (
                <ArrowRight className="transition-all duration-300" />
              )}
              {!collapsed && (
                <span className="ml-4 text-lg font-medium transition-all duration-300">
                  Transfers
                </span>
              )}
            </div>
          </Link>
        </li>

        {/* Bill Payments */}
        <li>
          <Link href="/dashboard/bill-payments">
            <div className="flex items-center py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              {!collapsed && (
                <FileText className="transition-all duration-300" />
              )}
              {!collapsed && (
                <span className="ml-4 text-lg font-medium transition-all duration-300">
                  Bill Payments
                </span>
              )}
            </div>
          </Link>
        </li>

        {/* Settings */}
        <li>
          <Link href="/dashboard/settings">
            <div className="flex items-center py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              {!collapsed && (
                <Settings className="transition-all duration-300" />
              )}
              {!collapsed && (
                <span className="ml-4 text-lg font-medium transition-all duration-300">
                  Settings
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
