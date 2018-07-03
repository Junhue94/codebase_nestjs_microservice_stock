import * as Config from 'config';
import * as Sequelize from 'sequelize';
import { logger } from '../common/logger';

const { database, user, password, host, dialect, logQueries } = Config.get('postgres');

export let pgConnection;

/**
 * Test Postgres DB Connection
 * @returns {Promise<any>}
 */
export const pgConnect = () => {
    return new Promise((resolve, reject) => {
        pgConnection = new Sequelize(database, user, password, {
            host,
            dialect,
            operatorsAliases: false,
            logging: logQueries
        });

        pgConnection
            .authenticate()
            .then(() => {
                logger.info(`Database Service :: sequelize :: Connected to ${host}`);
                resolve();
            })
            .catch(err => {
                logger.error(`Database Service :: sequelize :: Connection error! ${JSON.stringify(err)}`);
                reject(err);
            });
    });
};
