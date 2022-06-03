const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Project.init({
    title: DataTypes.STRING,
    heading: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    href: DataTypes.STRING,
    sourceCode: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
