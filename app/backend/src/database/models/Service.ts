import { Association, DataTypes, Model } from 'sequelize';
import db from '.';
import User from './User';
import Piece from './Piece';

class Service extends Model {
  public id!: number;
  public technicalId!: number;
  public clientId!: number;
  public status!: 'progress' | 'finished';
  public createdAt!: Date;
  public finishedAt?: Date;

  public readonly technical?: User;
  public readonly client?: User;
  public readonly pieces?: Piece[];

  public static associations: {
    technical: Association<Service, User>;
    client: Association<Service, User>;
    pieces: Association<Service, Piece>;
  };

  public static associate() {
    this.belongsTo(User, { as: 'technical', foreignKey: 'technicalId' });
    this.belongsTo(User, { as: 'client', foreignKey: 'clientId' });
    this.belongsToMany(Piece, {
      through: 'service_pieces',
      foreignKey: 'serviceId',
      otherKey: 'pieceId'
    });
  }
}

Service.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  technicalId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  clientId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('progress', 'finished'),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  finishedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: true,
  updatedAt: false,
  modelName: 'services',
});

export default Service;
