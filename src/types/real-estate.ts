export interface IDraft {
    isAgent: boolean,
    propertyType: string,
    dealType: string,
    rentPeriod?: string
}

export interface ILocation {
    address: string;
    lat: number;
    lng: number;
    metro: string;
}

export interface IApartment {
    rooms: number;
    totalArea: number;
    livingArea: number;
    kitchenArea: number;
    floor: number;
    totalFloors: number;
}

export interface IFeatures {
    balcony: number;
    windowView: string;
    bathroomType: string;
    renovation: string;
    elevator: number;
    parking: string;
}

export interface IAmenities {
    furniture: string;
    bathroomFacilities: string;
    appliances: string;
    communication: string;
}

export interface IDetails {
    title: string;
    description: string;
}

export interface IRulesData {
    price: number;
    currency: "USD" | "UZS";
    rentPerMonth?: number;
    payBy?: "owner" | "renter";
    prepayment?: number;
    deposit?: number;
    rentalTerm?: string;
    livingRules?: string;
    name: string;
    phone: string;
    additionalPhone?: string;
}