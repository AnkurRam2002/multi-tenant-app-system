import fs from 'fs';
import path from 'path';

export const generateNginxConfig = (tenantName, domain, targetPort) => {
  const config = `
server {
    listen 80;
    server_name ${domain};

    root C:/nginx-1.27.5/html/${tenantName};
    index index.html;

    location / {
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
        
        try_files $uri $uri/ /index.html;
    }
}
  `;
   const configDir = path.resolve('C:/nginx-1.27.5/conf/conf.d/');

  // Create conf.d directory if it doesn't exist
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  const configPath = path.join(configDir, `${tenantName}.conf`);
  fs.writeFileSync(configPath, config, 'utf8');
  console.log(`✅ Nginx config created for ${tenantName}`);
};