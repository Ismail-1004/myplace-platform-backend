import { DataTypes } from "sequelize";
import sequelize from '../../config'

const Features = sequelize.define("features", {
    balcony: { type: DataTypes.INTEGER },
    windowView: { type: DataTypes.ENUM("street", "yard") },
    bathroomType: { type: DataTypes.ENUM("separate", "combined") },
    renovation: { type: DataTypes.ENUM("none", "cosmetic", "euro", "designer") },
    elevator: { type: DataTypes.INTEGER },
    parking: { type: DataTypes.ENUM('none', 'ground', 'underground', 'multi-level') }
});

export default Features;