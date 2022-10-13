import { body } from "express-validator";

export const userRegisterValidation = () => {
    return[
        body('name')
        .isString()
        .withMessage('O nome (name) é obrigatório'),

        body('email')
        .isString()
        .withMessage('O e-mail (email) é obrigatório')
        .isEmail()
        .withMessage('É necessário um e-mail válido'),

        body('password')
        .isString()
        .withMessage('A senha (password) é obrigatória'),
    ]
}

export const userLoginValidation = () => {
    return[
        body('email')
        .isString()
        .withMessage('O e-mail (email) é obrigatório'),
        
        body('password')
        .isString()
        .withMessage('A senha (password) é obrigatória'),       
    ]
}

export const userUpdateFavoritesValidation = () => {
    return[
        body('favoriteGames').isArray(),
        body('favoriteGames.*.id', 'O id do item precisar ser um número').isNumeric(),
        body('favoriteGames.*.title', 'O título (title) do item precisar ser uma string').isString(),
        body('favoriteGames.*.thumbnail', 'A thumbnail do item precisar ser uma string').isString(),
        body('favoriteGames.*.genre', 'O gênero (genre) do item precisar ser uma string').isString(),
    ]
}