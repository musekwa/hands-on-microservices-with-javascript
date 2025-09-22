import path from 'path';
import db from './db/index.js';
import app from './app.js';
import { createConfig } from './config/config.js';
const {fileURLToPath} = await import('url');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function execute() {
    const configPath = path.join(__dirname, '../configs/.env');
    const appConfig = createConfig(configPath);

    await db.connect(appConfig);
    const server = app.listen(appConfig.port, () => {
        console.log('account service started', { port: appConfig.port });
    });

    const closeServer = () => {
        if (server) {
            server.close(() => {
                console.log('server closed');
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    };

    const unexpectedError = (error) => {
        console.log('unhandled error', { error });
        closeServer();
    };

    process.on('uncaughtException', unexpectedError);
    process.on('unhandledRejection', unexpectedError);
}

execute();
