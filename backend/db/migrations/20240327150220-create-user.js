"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validator: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      phone: {
        type: DataTypes.STRING,
      },
      shopName: {
        type: DataTypes.STRING,
      },
      shopPhone: {
        type: DataTypes.STRING,
      },
      shopAddress: {
        type: DataTypes.STRING,
      },
      shopLogo: {
        type: DataTypes.STRING,
      },
      siret: {
        type: DataTypes.STRING,
      },
      TvaNumber: {
        type: DataTypes.STRING,
      },
      capital: {
        type: DataTypes.STRING,
      },
      siteWeb: {
        type: DataTypes.STRING,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("users");
  },
};
