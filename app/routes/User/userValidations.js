"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateFavoritesValidation = exports.userLoginValidation = exports.userRegisterValidation = void 0;
var express_validator_1 = require("express-validator");
var userRegisterValidation = function () {
    return [
        (0, express_validator_1.body)('name')
            .isString()
            .withMessage('O nome (name) é obrigatório'),
        (0, express_validator_1.body)('email')
            .isString()
            .withMessage('O e-mail (email) é obrigatório')
            .isEmail()
            .withMessage('É necessário um e-mail válido'),
        (0, express_validator_1.body)('password')
            .isString()
            .withMessage('A senha (password) é obrigatória'),
    ];
};
exports.userRegisterValidation = userRegisterValidation;
var userLoginValidation = function () {
    return [
        (0, express_validator_1.body)('email')
            .isString()
            .withMessage('O e-mail (email) é obrigatório'),
        (0, express_validator_1.body)('password')
            .isString()
            .withMessage('A senha (password) é obrigatória'),
    ];
};
exports.userLoginValidation = userLoginValidation;
var userUpdateFavoritesValidation = function () {
    return [
        (0, express_validator_1.body)('favoriteGames').isArray(),
        (0, express_validator_1.body)('favoriteGames.*.id', 'O id do item precisar ser um número').isNumeric(),
        (0, express_validator_1.body)('favoriteGames.*.title', 'O título (title) do item precisar ser uma string').isString(),
        (0, express_validator_1.body)('favoriteGames.*.thumbnail', 'A thumbnail do item precisar ser uma string').isString(),
        (0, express_validator_1.body)('favoriteGames.*.genre', 'O gênero (genre) do item precisar ser uma string').isString(),
    ];
};
exports.userUpdateFavoritesValidation = userUpdateFavoritesValidation;
