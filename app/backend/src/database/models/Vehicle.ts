import { Model, DataTypes } from 'sequelize';
import User from './User';
import db from '.';

class Vehicle extends Model {
  public id!: number;
  public brand!: string;
  public model!: string;
  public year!: number;
  public color!: string;
  public userId!: number;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize: db,
    modelName: 'vehicles',
    underscored: true,
    timestamps: false,
  }
);

Vehicle.belongsTo(User, { foreignKey: 'userId', as: 'owner' });

export default Vehicle;
