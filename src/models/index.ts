import * as Config from 'config';
import * as Sequelize from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../common/logger';

const db: any = {};
const { database, user, password, host, dialect, logQueries } = Config.get('postgres');

const pgSequelize = new Sequelize(database, user, password, {
    host,
    dialect,
    operatorsAliases: false,
    logging: logQueries
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== 'index.ts');
    })
    .forEach(file => {
        const model: any = pgSequelize.import(path.join(__dirname, file));
        db[model.name] = model;
        logger.info(`Database :: Postgres :: Model ${model.name} imported`);
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = pgSequelize;
db.Sequelize = Sequelize;
