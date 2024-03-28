"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validator: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      phone: {
        type: Sequelize.STRING,
      },
      shopName: {
        type: Sequelize.STRING,
      },
      shopPhone: {
        type: Sequelize.STRING,
      },
      shopAddress: {
        type: Sequelize.STRING,
      },
      shopLogo: {
        type: Sequelize.STRING,
      },
      siret: {
        type: Sequelize.STRING,
      },
      TvaNumber: {
        type: Sequelize.STRING,
      },
      capital: {
        type: Sequelize.STRING,
      },
      siteWeb: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
