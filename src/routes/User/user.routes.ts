import express from "express";
import { Authenticate } from "../../middlewares/authenticate";
import { HandleErrors } from "../../middlewares/handleErrors";
import { Validate } from "../../middlewares/handleValidation";
import UserControllers from "./user.controllers";
import { userRegisterValidation, userLoginValidation, userUpdateFavoritesValidation } from "./userValidations";

const router = express.Router();

router.post("/", userRegisterValidation(), Validate, HandleErrors(UserControllers.Register));
router.post("/login", userLoginValidation(), Validate, HandleErrors(UserControllers.Login));
router.get("/autologin", Authenticate, HandleErrors(UserControllers.AutoLogin));
router.patch("/favorites", userUpdateFavoritesValidation(), Validate, Authenticate, HandleErrors(UserControllers.UpdateFavorites));

export default router;