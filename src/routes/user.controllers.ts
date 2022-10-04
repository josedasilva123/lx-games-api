import { Request, Response } from "express";
import { UserLogin } from "./services/Login.service";
import { UserRegister } from "./services/Register.service";
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
    const autoLogin = new UserLogin();
    const response = await autoLogin.execute(req.body);
    
    res.status(200).json(response);
  }
}
