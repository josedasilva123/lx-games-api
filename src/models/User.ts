import { Schema, model, ObjectId } from "mongoose";

export interface iGame{
    id: string;
    title: string;
    thumbnail: string;
    genre: string;
}

export interface iUser{
    _id?: ObjectId;
    name: string;
    password: string;
    email: string;
    favoriteGames?: iGame[];
    createAt: string;
    updatedAt: string;
}

const userSchema = new Schema<iUser>({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    favoriteGames: { type: Array<iGame>, required: false },
}, {
    timestamps: true,
})

const User = model<iUser>("User", userSchema, "users");

export default User;