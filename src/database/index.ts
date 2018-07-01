import * as Config from 'config';
import * as Sequelize from 'sequelize';

const pgConfig: any = Config.get('postgres');

export const db = new Sequelize(pgConfig.database, pgConfig.user, pgConfig.password, {
    host: pgConfig.host,
    dialect: pgConfig.dialect,
    operatorsAliases: false,
    logging: pgConfig.logQueries
});
