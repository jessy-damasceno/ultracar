import { DataTypes, Model } from 'sequelize';
import db from '.';
import Service from './Service';

interface IPiece {
  id: number;
  name: string;
  price: number;
}

class Piece extends Model<IPiece> implements IPiece {
  public id!: number;
  public name!: string;
  public price!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize() {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize: db,
        underscored: true,
        timestamps: false,
        modelName: 'pieces',
      }
    );
  }

  public static associate() {
    this.belongsToMany(Service, {
      through: 'service_pieces',
      foreignKey: 'pieceId',
      as: 'services',
    });
  }
}

export default Piece;