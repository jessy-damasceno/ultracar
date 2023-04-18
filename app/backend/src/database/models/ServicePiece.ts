import { DataTypes, Model } from 'sequelize';
import db from '.';

import Piece from './Piece';
import Service from './Service';

class ServicePiece extends Model {
  public serviceId!: number;
  public pieceId!: number;
  public quantity?: number;

  public static associate() {
    this.belongsTo(Service, { foreignKey: 'serviceId', onDelete: 'CASCADE' });
    this.belongsTo(Piece, { foreignKey: 'pieceId', onDelete: 'CASCADE' });
  }
}

ServicePiece.init(
  {
    serviceId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id',
      },
    },
    pieceId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pieces',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'service_pieces',
    timestamps: false,
    underscored: true,
  }
);

export default ServicePiece;
