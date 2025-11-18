import Listing from "./Listing";
import Details from "./Details";
import Location from "./Location";
import Apartment from "./Apartment";
import Features from "./Features";
import Rules from "./Rules";
import Amenities from "./Amenities";
import Media from "./Media";

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

Listing.hasMany(Media, { foreignKey: "listingId", onDelete: "CASCADE" });
Media.belongsTo(Listing, { foreignKey: "listingId" });

export { Listing, Location, Apartment, Features, Rules, Amenities, Media }