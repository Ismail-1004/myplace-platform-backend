import { DataTypes } from "sequelize";
import sequelize from '../../config'

const Listing = sequelize.define('listing', {
    isAgent: { type: DataTypes.BOOLEAN, defaultValue: false },
    propertyType: { type: DataTypes.ENUM('apartment', 'house', 'office', 'land'), allowNull: false },
    dealType: { type: DataTypes.ENUM('rent', 'sale'), allowNull: false },
    rentPeriod: { type: DataTypes.ENUM("long", "daily") },
    status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
})

export default Listing;