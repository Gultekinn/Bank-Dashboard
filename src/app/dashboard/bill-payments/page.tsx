"use client"
import { CreditCard, FileText, DollarSign, ArrowRightCircle } from 'lucide-react';

const BillPayment = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-900">Bill Payment</h1>

      {/* Bill Payment Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Pay Your Bills</h3>

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

        {/* Bill Type Section */}
        <div className="mt-6">
          <label htmlFor="billType" className="block text-sm text-gray-700">Bill Type</label>
          <div className="flex items-center border border-gray-300 p-3 rounded-lg mt-2">
            <FileText className="text-blue-600" size={24} />
            <select
              id="billType"
              className="ml-4 w-full outline-none bg-transparent text-gray-700"
            >
              <option>Electricity</option>
              <option>Water</option>
              <option>Internet</option>
              <option>Gas</option>
            </select>
          </div>
        </div>

        {/* Bill Amount Section */}
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

        {/* Payment Button */}
        <div className="mt-6 flex justify-between items-center">
          <button className="flex items-center py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
            <ArrowRightCircle className="mr-2" size={20} />
            Pay Now
          </button>
          <span className="text-sm text-gray-500">Transaction fee: $1.00</span>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-900">Recent Payments</h3>
        <div className="mt-4 space-y-4">
          {/* Payment 1 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Electricity Bill</p>
              <p className="text-sm text-gray-500">Account: 2345 **** 9876</p>
            </div>
            <div>
              <p className="text-lg text-green-600">$120.00</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>

          {/* Payment 2 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Internet Bill</p>
              <p className="text-sm text-gray-500">Account: 1234 **** 4321</p>
            </div>
            <div>
              <p className="text-lg text-green-600">$50.00</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPayment;
