import { useState } from 'react';
import DeployedAppsTable from './components/DeployedAppsTable';
import DeployAppForm from './components/DeployAppForm';

function Dashboard() {
  const [view, setView] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Multi-Tenant Platform Admin</h1>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setView('deployed')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow"
          >
            View Deployed Apps
          </button>
          <button
            onClick={() => setView('deploy')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl shadow"
          >
            Deploy New App
          </button>
        </div>

        {view === 'deployed' && <DeployedAppsTable />}
        {view === 'deploy' && <DeployAppForm />}

        {!view && (
          <p className="text-center text-gray-600">Select an option above to continue.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;


