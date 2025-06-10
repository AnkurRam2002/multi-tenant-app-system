import fs from 'fs-extra';
import path from 'path';
import pool from '../db.js';
import { generateNginxConfig } from '../utils/generateNginxConfig.js';
import { reloadNginx } from '../utils/reloadNginx.js';

const nginxHtmlDir = 'C:/nginx-1.27.5/html';

export const deployApp = async (req, res) => {
  const { tenantName, domain, targetPort, appPath } = req.body;

  if (!tenantName || !domain || !targetPort || !appPath) {
    return res.status(400).json({ error: 'tenantName, domain, targetPort and appPath are required' });
  }

  try {
    // Insert tenant info including appPath
    const result = await pool.query(
      'INSERT INTO tenants(tenant_name, domain, target_port, app_path) VALUES($1, $2, $3, $4) RETURNING *',
      [tenantName, domain, targetPort, appPath]
    );

    // Copy app files to Nginx folder
    const destPath = path.join(nginxHtmlDir, tenantName);
    await fs.copy(appPath, destPath);
    console.log(`✅ App files copied to ${destPath}`);

    // Generate Nginx config
    generateNginxConfig(tenantName, domain, targetPort);

    // Reload Nginx
    reloadNginx();

    res.status(200).json({ message: 'App deployed', tenant: result.rows[0] });
  } catch (error) {
    console.error('Deployment error:', error);
    res.status(500).json({ error: 'Deployment failed' });
  }
};
