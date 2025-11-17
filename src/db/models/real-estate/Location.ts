import { DataTypes } from "sequelize";
import sequelize from "../../config";

const Location = sequelize.define("location", {
    address: { type: DataTypes.STRING, allowNull: false },
    lat: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
    lng: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
    metro: { type: DataTypes.ARRAY(DataTypes.STRING) },
});

export default Location;