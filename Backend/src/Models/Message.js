import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import User from "./User.js";

const Message = sequelize.define(
    "Message",
    {
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        receiverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        text: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        tableName: "messages",
    }
);

export default Message;
