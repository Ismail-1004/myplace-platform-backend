import { DataTypes } from "sequelize";
import sequelize from '../../config'

const Listing = sequelize.define('listing', {
    isAgent: { type: DataTypes.BOOLEAN, defaultValue: false },
    propertyType: { type: DataTypes.ENUM('apartment'), allowNull: false },
    dealType: { type: DataTypes.ENUM('rent'), allowNull: false },
    rentPeriod: { type: DataTypes.ENUM("long", "daily") },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    address: { type: DataTypes.STRING, allowNull: false },
    lat: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
    lng: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
    metro: { type: DataTypes.ARRAY(DataTypes.STRING) },
})

export default Listing;