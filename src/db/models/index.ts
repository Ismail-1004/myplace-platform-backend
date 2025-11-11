import User from "./User";
import Listing from "./real-estate/Listing";
import Apartment from "./real-estate/Apartment";
import Features from "./real-estate/Features";
import Rules from "./real-estate/Rules";
import Amenities from "./real-estate/Amenities";
import Media from "./real-estate/Media";
import Contact from "./real-estate/Contact";

User.hasMany(Listing, { foreignKey: "userId", onDelete: "CASCADE" });
Listing.belongsTo(User, { foreignKey: "userId" });

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

export { User, Listing, Apartment, Features, Rules, Amenities, Media, Contact }