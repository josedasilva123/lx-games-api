import { iAuthenticateBody } from "../../types/types";

export class UserAutoLogin {
  async execute(body: iAuthenticateBody) {
    const user = body.user;

    if (user) {
      return { user: user };
    } else {
      throw new Error("Desculpe, usuário inválido.");
    }
  }
}
