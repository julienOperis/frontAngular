import { Restaurant } from "./restaurant.interface";

export interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: Blob | null; // Binary Large Object
    favoriteRestaurants: Restaurant[]; // Liste de restaurants préférés
}
