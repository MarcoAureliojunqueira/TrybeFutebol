import { Model, QueryInterface, DataTypes } from 'sequelize';
import IExample from '../../Interfaces/Example';
import ModelTeams from '../models/teams';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('teams', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teamName:{
        type: DataTypes.STRING,
        field: 'team_name',
        allowNull: false,
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('teams');
  },
};