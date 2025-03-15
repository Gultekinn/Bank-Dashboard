// /app/dashboard/transactions.tsx
const transactions = [
  { id: 1, date: '2025-03-10', amount: -50, description: 'ATM Withdrawal' },
  { id: 2, date: '2025-03-12', amount: +200, description: 'Deposit' },
  { id: 3, date: '2025-03-13', amount: -30, description: 'Grocery Shopping' },
];

const Transactions = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800">Transaction History</h2>
        <ul className="mt-4 space-y-3">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-100 transition-colors duration-300"
            >
              <p className="text-sm text-gray-500">{transaction.date}</p>
              <h3 className="text-xl font-semibold">{transaction.description}</h3>
              <p className={transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}>
                ${transaction.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;

