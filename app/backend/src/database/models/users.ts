import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class ModelUser extends Model<InferAttributes<ModelUser>,
InferCreationAttributes<ModelUser>> {
  declare id: CreationOptional<number>;
  declare role: string;
  declare username: string;
  declare email: string;
  declare password: string;
}

ModelUser.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(ModelUser, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(ModelUser, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// ModelUser.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// ModelTeams.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default ModelUser;
