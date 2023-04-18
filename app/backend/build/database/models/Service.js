"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const User_1 = require("./User");
const Piece_1 = require("./Piece");
class Service extends sequelize_1.Model {
    static associate() {
        this.belongsTo(User_1.default, { as: 'technical', foreignKey: 'technicalId' });
        this.belongsTo(User_1.default, { as: 'client', foreignKey: 'clientId' });
        this.belongsToMany(Piece_1.default, {
            through: 'service_pieces',
            foreignKey: 'serviceId',
            otherKey: 'pieceId'
        });
    }
}
Service.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    technicalId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id',
        },
    },
    clientId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id',
        },
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('progress', 'finished'),
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    finishedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: _1.default,
    underscored: true,
    timestamps: true,
    updatedAt: false,
    modelName: 'services',
});
exports.default = Service;
//# sourceMappingURL=Service.js.map