import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import ModelTeams from './teams';
// import OtherModel from './OtherModel';

class ModelMatches extends Model<InferAttributes<ModelMatches>,
InferCreationAttributes<ModelMatches>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress:boolean;
}

ModelMatches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inProgress: {
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
ModelMatches.belongsTo(ModelTeams, {
  foreignKey: 'homeTeamId', as: 'homeId',
});
ModelMatches.belongsTo(ModelTeams, {
  foreignKey: ' awayTeamId', as: 'awayId',
});

ModelTeams.hasMany(ModelMatches, {
  foreignKey: 'homeTeamId', as: 'homeMatchesId',
});

ModelTeams.hasMany(ModelMatches, {
  foreignKey: 'awayTeamId', as: 'awayMatchesId',
});
// OtherModel.belongsTo(ModelMatches, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(ModelMatches, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// ModelMatches.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// ModelTeams.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default ModelMatches;
