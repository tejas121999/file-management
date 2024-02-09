const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Files extends Model {}

  Files.init(
    {
      fileName: {
        type: DataTypes.STRING,
        field: "fileName",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "files",
      modelName: "Files",
      timestamps: true,
    }
  );

  return Files;
};
