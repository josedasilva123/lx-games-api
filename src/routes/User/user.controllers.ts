import { Request, Response } from "express";
import { UserAutoLogin } from "../../services/User/Autologin.service";
import { UserLogin } from "../../services/User/Login.service";
import { UserRegister } from "../../services/User/Register.service";
import { UserUpdateFavorites } from "../../services/User/UpdateFavorites.service";
import { iLoginBody, iRegisterBody } from "./types/types";

export default class UserControllers {
  static async Register(req: Request<{}, {}, iRegisterBody, {}>, res: Response) {
    const register = new UserRegister();
    const response = await register.execute(req.body);

    res.status(200).json(response);
  }

  static async Login(req: Request<{}, {}, iLoginBody, {}>, res: Response) {
    const login = new UserLogin();
    const response = await login.execute(req.body);

    res.status(200).json(response);
  }

  static async AutoLogin(req: Request, res: Response) {
    const autoLogin = new UserAutoLogin();
    const response = await autoLogin.execute(req.body);
    
    res.status(200).json(response);
  }

  static async UpdateFavorites(req: Request, res: Response){
    const updateFavorites = new UserUpdateFavorites();
    const response = await updateFavorites.execute(req.body);

    res.status(200).json(response);
  }
}
