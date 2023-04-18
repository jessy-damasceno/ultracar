"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Vehicle_1 = require("./Vehicle");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: (0, sequelize_1.STRING)(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: (0, sequelize_1.STRING)(255),
        allowNull: false,
    },
    phoneNumber: {
        type: (0, sequelize_1.STRING)(20),
        allowNull: true,
    },
    firstName: {
        type: (0, sequelize_1.STRING)(255),
        allowNull: false,
    },
    lastName: {
        type: (0, sequelize_1.STRING)(255),
        allowNull: false,
    },
    type: {
        type: (0, sequelize_1.ENUM)('admin', 'cliente', 'tecnico'),
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    underscored: true,
    timestamps: false,
});
User.hasMany(Vehicle_1.default, { foreignKey: 'userId', as: 'vehicles' });
exports.default = User;
//# sourceMappingURL=User.js.map