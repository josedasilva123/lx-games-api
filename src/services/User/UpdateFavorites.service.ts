import { ObjectId } from "mongodb";
import User, { iUser } from "../../models/User";
import { iUpdateFavoritesBody } from "../../routes/User/types/types";

export class UserUpdateFavorites {
  async execute(body: iUpdateFavoritesBody) {
    const { id, favoriteGames } = body;

    const userID = new ObjectId(id);

    const user = (await User.findOne({ _id: userID })) as iUser;

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    await User.updateOne(
        { _id: user._id },
        {
            $set: {
                favoriteGames: favoriteGames
            }
        }
    )
    
    return { message: "Alteração realizada com sucesso!"}
  }
}
