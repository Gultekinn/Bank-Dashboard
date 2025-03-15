// /app/dashboard/page.tsx

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex space-x-6">
      

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-blue-800">Welcome to Your Dashboard</h1>
          <p className="mt-4 text-gray-600">Your banking overview and settings are right here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
