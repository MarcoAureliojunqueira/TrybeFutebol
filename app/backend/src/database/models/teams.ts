import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class ModelTeams extends Model<InferAttributes<ModelTeams>,
InferCreationAttributes<ModelTeams>> {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

ModelTeams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(ModelTeams, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(ModelTeams, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// ModelTeams.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// ModelTeams.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default ModelTeams;
