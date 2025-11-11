import { DataTypes } from "sequelize";
import sequelize from "../../config";

const Amenities = sequelize.define("amenities", {
    furniture: {
        type: DataTypes.ENUM("none", "kitchen", "rooms", "full"),
        allowNull: true,
        defaultValue: null
    },
    bathroomFacilities: {
        type: DataTypes.ENUM("bath", "shower"),
        allowNull: true,
        defaultValue: null
    },
    appliances: {
        type: DataTypes.ENUM('conditioner', 'fridge', 'tv', 'dishwasher', 'washing-machine'), allowNull: true,
        defaultValue: null
    },
    communication: {
        type: DataTypes.ENUM('internet', 'phone'), 
        allowNull: true,
        defaultValue: null
    },
});

export default Amenities;
