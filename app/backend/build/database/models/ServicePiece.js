"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Piece_1 = require("./Piece");
const Service_1 = require("./Service");
class ServicePiece extends sequelize_1.Model {
    static associate() {
        this.belongsTo(Service_1.default, { foreignKey: 'serviceId', onDelete: 'CASCADE' });
        this.belongsTo(Piece_1.default, { foreignKey: 'pieceId', onDelete: 'CASCADE' });
    }
}
ServicePiece.init({
    serviceId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'services',
            key: 'id',
        },
    },
    pieceId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'pieces',
            key: 'id',
        },
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'service_pieces',
    timestamps: false,
    underscored: true,
});
exports.default = ServicePiece;
//# sourceMappingURL=ServicePiece.js.map