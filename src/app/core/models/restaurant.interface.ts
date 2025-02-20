import { Review } from "./review.interface";
import { User } from "./user.interface";

export interface Restaurant {
 
    id: number;
    name: string;
    adresse: string;
    avis: Review[];
    users: User[];
}