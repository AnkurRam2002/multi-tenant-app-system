import { execSync } from 'child_process';

const NGINX_PATH = 'C:/nginx-1.27.5/nginx.exe';
const NGINX_CONF = 'C:/nginx-1.27.5/conf/nginx.conf';
const NGINX_DIR = 'C:/nginx-1.27.5/';

export const reloadNginx = () => {
  try {
    execSync(`${NGINX_PATH} -s reload -c ${NGINX_CONF}`, { cwd: NGINX_DIR });
    console.log('✅ Nginx reloaded successfully');
  } catch (error) {
    console.error('❌ Error reloading Nginx:', error);
  }
};