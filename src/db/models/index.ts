import User from "./user/User";
import Token from './user/Token'
import Listing from "./real-estate/Listing";
import Details from "./real-estate/Details";
import Location from "./real-estate/Location";
import Apartment from "./real-estate/Apartment";
import Features from "./real-estate/Features";
import Rules from "./real-estate/Rules";
import Amenities from "./real-estate/Amenities";
import Media from "./real-estate/Media";
import Contact from "./real-estate/Contact";

User.hasOne(Token, { foreignKey: "userId" });
Token.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Listing, { foreignKey: "userId", onDelete: "CASCADE" });
Listing.belongsTo(User, { foreignKey: "userId" });

Listing.hasOne(Details, { foreignKey: "listingId", onDelete: "CASCADE" });
Details.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasOne(Location, { foreignKey: "listingId", onDelete: "CASCADE" });
Location.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasOne(Apartment, { foreignKey: "listingId", onDelete: "CASCADE" });
Apartment.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasOne(Features, { foreignKey: "listingId", onDelete: "CASCADE" });
Features.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasOne(Rules, { foreignKey: "listingId", onDelete: "CASCADE" });
Rules.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasOne(Amenities, { foreignKey: "listingId", onDelete: "CASCADE" });
Amenities.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasOne(Contact, { foreignKey: "listingId", onDelete: "CASCADE" });
Contact.belongsTo(Listing, { foreignKey: "listingId" });

Listing.hasMany(Media, { foreignKey: "listingId", onDelete: "CASCADE" });
Media.belongsTo(Listing, { foreignKey: "listingId" });

export { User, Token, Listing, Apartment, Features, Rules, Amenities, Media, Contact }