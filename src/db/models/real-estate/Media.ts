import { DataTypes } from "sequelize";
import sequelize from "../../config";

const Media = sequelize.define("media", {
  type: { type: DataTypes.ENUM("image", "video"), allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
  order: { type: DataTypes.INTEGER, defaultValue: 0 }
});

export default Media;
