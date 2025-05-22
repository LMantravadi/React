
export interface Property{
    id: number;
    name: string;
    address: string;
    city: string;
    currency: string;

    ownershipTitle?: string;
    associationName?: string;
    logoUrl?: string;
    createdAt?: string;
    updatedAt?:string;
}