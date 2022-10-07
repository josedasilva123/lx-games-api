"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var handleErrors_1 = require("../../middlewares/handleErrors");
var handleValidation_1 = require("../../middlewares/handleValidation");
var user_controllers_1 = __importDefault(require("./user.controllers"));
var userValidations_1 = require("./userValidations");
var router = express_1.default.Router();
router.post("/", (0, userValidations_1.userRegisterValidation)(), handleValidation_1.Validate, (0, handleErrors_1.HandleErrors)(user_controllers_1.default.Register));
router.post("/login", (0, userValidations_1.userLoginValidation)(), handleValidation_1.Validate, (0, handleErrors_1.HandleErrors)(user_controllers_1.default.Login));
router.get("/autologin", authenticate_1.Authenticate, (0, handleErrors_1.HandleErrors)(user_controllers_1.default.AutoLogin));
router.patch("/favorites", (0, userValidations_1.userUpdateFavoritesValidation)(), handleValidation_1.Validate, authenticate_1.Authenticate, (0, handleErrors_1.HandleErrors)(user_controllers_1.default.UpdateFavorites));
exports.default = router;
