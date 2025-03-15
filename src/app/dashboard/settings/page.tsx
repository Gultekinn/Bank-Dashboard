"use client"
import { User, Lock, Mail, Bell } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-900">Settings</h1>

      {/* Account Information */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Account Information</h3>

        <div className="mt-6 flex items-center border border-gray-300 p-3 rounded-lg">
          <User className="text-blue-600" size={24} />
          <div className="ml-4 w-full">
            <label htmlFor="username" className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              defaultValue="JohnDoe123"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center border border-gray-300 p-3 rounded-lg">
          <Mail className="text-blue-600" size={24} />
          <div className="ml-4 w-full">
            <label htmlFor="email" className="text-sm text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue="johndoe@example.com"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-none"
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Security Settings</h3>

        <div className="mt-6 flex items-center border border-gray-300 p-3 rounded-lg">
          <Lock className="text-blue-600" size={24} />
          <div className="ml-4 w-full">
            <label htmlFor="password" className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center border border-gray-300 p-3 rounded-lg">
          <Lock className="text-blue-600" size={24} />
          <div className="ml-4 w-full">
            <label htmlFor="confirmPassword" className="text-sm text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-none"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Notifications</h3>

        <div className="mt-6 flex items-center justify-between border border-gray-300 p-3 rounded-lg">
          <div className="flex items-center">
            <Bell className="text-blue-600" size={24} />
            <span className="ml-4 text-lg font-medium text-gray-700">Email Notifications</span>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            defaultChecked
          />
        </div>

        <div className="mt-6 flex items-center justify-between border border-gray-300 p-3 rounded-lg">
          <div className="flex items-center">
            <Bell className="text-blue-600" size={24} />
            <span className="ml-4 text-lg font-medium text-gray-700">SMS Notifications</span>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary"
          />
        </div>
      </div>

      {/* Save Settings Button */}
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
