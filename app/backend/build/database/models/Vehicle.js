"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
const _1 = require(".");
class Vehicle extends sequelize_1.Model {
}
Vehicle.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    brand: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    model: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    color: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
    sequelize: _1.default,
    modelName: 'vehicles',
    underscored: true,
    timestamps: false,
});
Vehicle.belongsTo(User_1.default, { foreignKey: 'userId', as: 'owner' });
exports.default = Vehicle;
//# sourceMappingURL=Vehicle.js.map