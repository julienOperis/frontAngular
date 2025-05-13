import { Restaurant } from "../../../core/models/restaurant.interface";

export interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string; // URL image profil
    favoriteRestaurants: Restaurant[]; // Liste de restaurants préférés
}

export interface ProfileRequest {
    profilMaj: Profile,
    fileUploadImage:File | null
}

