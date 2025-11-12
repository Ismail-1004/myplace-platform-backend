import { DataTypes } from "sequelize";
import sequelize from '../../config';

const User = sequelize.define('user', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('user', 'agent', 'admin'), defaultValue: 'user' },
    avatar: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamps: true,
    tableName: 'users'
})

export default User