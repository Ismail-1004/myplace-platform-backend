import { DataTypes } from "sequelize";
import sequelize from "../../config";

const Details = sequelize.define("details", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
});

export default Details;