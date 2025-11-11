import { DataTypes } from "sequelize";
import sequelize from '../../config'

const Apartment = sequelize.define("apartment", {
    rooms: { type: DataTypes.INTEGER },
    totalArea: { type: DataTypes.DECIMAL(6, 2) },
    livingArea: { type: DataTypes.DECIMAL(6, 2) },
    kitchenArea: { type: DataTypes.DECIMAL(6, 2) },
    floor: { type: DataTypes.INTEGER },
    totalFloors: { type: DataTypes.INTEGER },
});

export default Apartment;