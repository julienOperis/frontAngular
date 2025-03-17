import { Restaurant } from "./restaurant.interface";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: BinaryType | null; // Binary Large Object
    favoriteRestaurants: Restaurant[]; // Liste de restaurants préférés
}

export interface UserRequest {

    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}

