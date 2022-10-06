import { ObjectId } from "mongodb";
import User, { iUser } from "../../models/User";
import { iAuthenticateBody } from "../../types/types";

export class UserAutoLogin {
  async execute(body: iAuthenticateBody) {
    const { id } = body;

    const userID = new ObjectId(id);

    const user = await User.findOne({ _id: userID }) as iUser;

    if(!user){
      throw new Error("Usuário não encontrado."); 
    }

    return {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        favoriteGames: user.favoriteGames,
      },
    };
  }
}
