import { iGame } from "../../../models/User";
import { iAuthenticateBody } from "../../../types/types";

export interface iRegisterBody{
    name: string;
    email: string;
    password: string;
}

export interface iLoginBody{
    email: string;
    password: string;
}

export interface iUpdateFavoritesBody extends iAuthenticateBody{
    favoriteGames: iGame[];
}