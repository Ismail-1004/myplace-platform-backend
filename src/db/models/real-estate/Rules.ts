import { DataTypes } from "sequelize";
import sequelize from '../../config'

const Rules = sequelize.define("rules", {
    price: { type: DataTypes.INTEGER, allowNull: false },
    currency: { type: DataTypes.ENUM("USD", "UZS"), allowNull: false },
    rentPerMonth: { type: DataTypes.INTEGER },
    payBy: { type: DataTypes.ENUM("owner", "renter") },
    prepayment: { type: DataTypes.INTEGER },
    deposit: { type: DataTypes.INTEGER },
    rentalTerm: { type: DataTypes.STRING },
    livingRules: { type: DataTypes.TEXT },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    additionalPhone: { type: DataTypes.STRING, allowNull: true },
});

export default Rules;