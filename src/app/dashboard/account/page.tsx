"use client"
import { User, CreditCard, Mail } from 'lucide-react';

const Account = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-900">Account</h1>

      {/* Account Overview Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Account Overview</h3>
        <div className="flex items-center mt-4">
          <User className="text-blue-600" size={48} />
          <div className="ml-4">
            <p className="text-lg font-medium">Jane Doe</p>
            <p className="text-gray-500">Account Number: 2345 6789 0123</p>
          </div>
        </div>
      </div>

      {/* Account Balance Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Account Balance</h3>
        <p className="mt-2 text-2xl text-green-600">$3,520.85</p>
        <div className="mt-4 flex space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
            Deposit
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
            Withdraw
          </button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Contact Information</h3>
        <div className="flex items-center mt-4">
          <Mail className="text-blue-600" size={24} />
          <div className="ml-4">
            <p className="text-lg font-medium">Email Address</p>
            <p className="text-gray-500">jane.doe@email.com</p>
          </div>
        </div>
      </div>

      {/* Credit Card Information Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Credit Card Information</h3>
        <div className="flex items-center mt-4">
          <CreditCard className="text-blue-600" size={48} />
          <div className="ml-4">
            <p className="text-lg font-medium">MasterCard **** 1234</p>
            <p className="text-gray-500">Expiry: 12/24</p>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Change Password</h3>
        <form className="mt-4 space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm text-gray-700">Current Password</label>
            <input type="password" id="currentPassword" className="w-full p-3 rounded-lg border border-gray-300" />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm text-gray-700">New Password</label>
            <input type="password" id="newPassword" className="w-full p-3 rounded-lg border border-gray-300" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700">Confirm New Password</label>
            <input type="password" id="confirmPassword" className="w-full p-3 rounded-lg border border-gray-300" />
          </div>
          <div>
            <button type="submit" className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg">Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
