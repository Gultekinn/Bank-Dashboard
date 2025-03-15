"use client"
import { CreditCard, ArrowRightCircle, User, DollarSign } from 'lucide-react';

const Transfer = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-900">Money Transfer</h1>

      {/* Transfer Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Transfer Money</h3>

        {/* From Account Section */}
        <div className="mt-6">
          <label htmlFor="fromAccount" className="block text-sm text-gray-700">From Account</label>
          <div className="flex items-center border border-gray-300 p-3 rounded-lg mt-2">
            <CreditCard className="text-blue-600" size={24} />
            <select
              id="fromAccount"
              className="ml-4 w-full outline-none bg-transparent text-gray-700"
            >
              <option>Checking Account - **** 1234</option>
              <option>Savings Account - **** 5678</option>
            </select>
          </div>
        </div>

        {/* To Account Section */}
        <div className="mt-6">
          <label htmlFor="toAccount" className="block text-sm text-gray-700">To Account</label>
          <div className="flex items-center border border-gray-300 p-3 rounded-lg mt-2">
            <User className="text-blue-600" size={24} />
            <input
              type="text"
              id="toAccount"
              placeholder="Enter account number or recipient's name"
              className="ml-4 w-full outline-none bg-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Amount Section */}
        <div className="mt-6">
          <label htmlFor="amount" className="block text-sm text-gray-700">Amount</label>
          <div className="flex items-center border border-gray-300 p-3 rounded-lg mt-2">
            <DollarSign className="text-green-600" size={24} />
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              className="ml-4 w-full outline-none bg-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Transfer Button */}
        <div className="mt-6 flex justify-between items-center">
          <button className="flex items-center py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
            <ArrowRightCircle className="mr-2" size={20} />
            Transfer Now
          </button>
          <span className="text-sm text-gray-500">Transfer fee: $2.50</span>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Recent Transfers</h3>
        <div className="mt-4 space-y-4">
          {/* Transfer 1 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">To: John Doe</p>
              <p className="text-sm text-gray-500">Account: 2345 **** 9876</p>
            </div>
            <div>
              <p className="text-lg text-green-600">$500.00</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>

          {/* Transfer 2 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">To: Sarah Smith</p>
              <p className="text-sm text-gray-500">Account: 1234 **** 4321</p>
            </div>
            <div>
              <p className="text-lg text-green-600">$200.00</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
