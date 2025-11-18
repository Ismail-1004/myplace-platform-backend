import User from "./user/User";
import Token from './user/Token'
import { Listing } from './real-estate'

User.hasOne(Token, { foreignKey: "userId" });
Token.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Listing, { foreignKey: "userId", onDelete: "CASCADE" });
Listing.belongsTo(User, { foreignKey: "userId" });

export { User, Token, Listing }