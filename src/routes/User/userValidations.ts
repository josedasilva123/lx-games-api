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
        body('*.id', 'O id do item precisar ser um número').isNumeric(),
        body('*.title', 'O título (title) do item precisar ser uma string').isString(),
        body('*.thumbnail', 'A thumbnail do item precisar ser uma string').isString(),
        body('*.genre', 'O gênero (genre) do item precisar ser uma string').isString(),
    ]
}