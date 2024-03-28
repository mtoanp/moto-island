"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined };
    }
  }

  User.init(
    {
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
        // defaultValue: "user",
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
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
