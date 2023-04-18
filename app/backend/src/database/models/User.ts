import { INTEGER, STRING, Model, ENUM } from 'sequelize';
import db from '.';
import Vehicle from './Vehicle';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public phoneNumber!: string;
  public firstName!: string;
  public lastName!: string;
  public type!: 'admin' | 'cliente' | 'tecnico';
}

User.init(
  {
    id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING(255),
      allowNull: false,
    },
    phoneNumber: {
      type: STRING(20),
      allowNull: true,
    },
    firstName: {
      type: STRING(255),
      allowNull: false,
    },
    lastName: {
      type: STRING(255),
      allowNull: false,
    },
    type: {
      type: ENUM('admin', 'cliente', 'tecnico'),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    underscored: true,
    timestamps: false,
  }
);

User.hasMany(Vehicle, { foreignKey: 'userId', as: 'vehicles' });

export default User;