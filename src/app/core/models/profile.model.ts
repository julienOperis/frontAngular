import { Restaurant } from "./restaurant.interface";

export interface Profile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string; // URL ou chemin de la photo de profil
    favoriteRestaurants: Restaurant[]; // Liste de restaurants préférés
}
