import { stockModel } from './model';

const Stock = (sequelize, DataTypes) => {
    return sequelize.define(
        'Stock',
        stockModel(DataTypes)
    );
};

export default Stock;