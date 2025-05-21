module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Property", // ← Model name
    {
      // ← Attribute (column) definitions:
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownershipTitle: DataTypes.STRING,
      associationName: DataTypes.STRING,
      city: DataTypes.STRING,
      logoUrl: DataTypes.STRING,
      currency: DataTypes.STRING,
    },
    {
      // ← Model options:
      tableName: "properties",
      schema: "hoa",
      timestamps: true,
    }
  );
};
