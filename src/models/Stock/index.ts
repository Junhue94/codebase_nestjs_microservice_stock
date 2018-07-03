import { stockModel } from './model';

const Stock = (sequelize, DataTypes) => {
    return sequelize.define(
        'Stock',
        stockModel(DataTypes),
        {
            freezeTableName: true
        }
    );
};

export default Stock;