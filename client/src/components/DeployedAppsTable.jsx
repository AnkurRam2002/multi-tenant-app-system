import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';

async function checkAppStatus(domain) {
  try {
    const response = await axios.get(`http://${domain}`);
    return response.status === 200 || response.status === 304 ? 'online' : 'offline';
  } catch (error) {
    console.error(`Error checking status for ${domain}:`, error.message); 
    return 'offline';  
  }
}

function DeployedAppsTable() {
  const [apps, setApps] = useState([]);

  const fetchApps = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/deployments');
    if (res.status !== 200) {
      console.error('Failed to fetch deployments');
      return;
    }
    const appsWithStatus = await Promise.all(
      res.data.map(async (app) => {
        const status = await checkAppStatus(app.domain);
        return { ...app, status };
      })
    );
    setApps(appsWithStatus);
  };

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📊 Deployed Applications</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Domain</th>
              <th className="p-4 text-left">Target Port</th>
              <th className="p-4 text-left">App Path</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">App Redirect</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {apps.map((app) => (
              <tr
                key={app.tenant_name}
                className="hover:bg-gray-50 transition duration-200 border-b"
              >
                <td className="p-4 font-medium text-gray-800">{app.tenant_name}</td>
                <td className="p-4 text-gray-700">{app.domain}</td>
                <td className="p-4 text-gray-700">
                  {app.target_port ? `${app.target_port}` : 'N/A'}
                </td>
                <td className="p-4 text-gray-700">{app.app_path}</td>
                <td className="p-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      app.status === 'online'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {app.status === 'online' ? 'Online' : 'Offline'}
                  </span>
                </td>
                <td className="p-4">
                  <a
                    href={`http://${app.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </td>   
              </tr>
            ))}

            {apps.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No deployments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeployedAppsTable;





