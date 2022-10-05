import express from "express";
import { Authenticate } from "../../middlewares/authenticate";
import { HandleErrors } from "../../middlewares/handleErrors";
import { Validate } from "../../middlewares/handleValidation";
import UserControllers from "./user.controllers";
import { userRegisterValidation, userLoginValidation, userUpdateFavoritesValidation } from "./userValidations";

const router = express.Router();

router.post("/", Validate, userRegisterValidation() , HandleErrors(UserControllers.Register));
router.post("/login", Validate, userLoginValidation() , HandleErrors(UserControllers.Login));
router.get("/autologin", Authenticate, HandleErrors(UserControllers.AutoLogin));
router.patch("/favorites", Validate, userUpdateFavoritesValidation(), Authenticate, HandleErrors(UserControllers.UpdateFavorites));

export default router;