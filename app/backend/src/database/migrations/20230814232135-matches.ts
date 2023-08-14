import { Model, QueryInterface, DataTypes } from 'sequelize';
import IExample from '../../Interfaces/Example';
import ModelTeams from '../models/teams';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('matches', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      home_team_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      home_team_goals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      away_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      away_team_goals: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      in_progress: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('matches');
  },
};