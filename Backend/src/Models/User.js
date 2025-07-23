import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

const User = sequelize.define(
    "User",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePic: {
            type: DataTypes.STRING,
            defaultValue: "",
        },
    },
    {
        timestamps: true,
        tableName: "users",
    }
);

export default User;
