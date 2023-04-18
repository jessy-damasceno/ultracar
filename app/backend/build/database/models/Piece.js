"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Service_1 = require("./Service");
class Piece extends sequelize_1.Model {
    static initialize() {
        this.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
        }, {
            sequelize: _1.default,
            underscored: true,
            timestamps: false,
            modelName: 'pieces',
        });
    }
    static associate() {
        this.belongsToMany(Service_1.default, {
            through: 'service_pieces',
            foreignKey: 'pieceId',
            as: 'services',
        });
    }
}
exports.default = Piece;
//# sourceMappingURL=Piece.js.map