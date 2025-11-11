import { DataTypes } from "sequelize";
import sequelize from "../../config";

const Contact = sequelize.define("contact", {
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

export default Contact;