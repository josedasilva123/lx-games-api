# Lex Games API 1.0.0

Uma API para aplicação Lex Games, contendo rotas de usuário (Cadastro, Login e Auto-login), além da rota de atualização de games favoritos.

Url:

```ssh
https://lx-games-api.onrender.com/
```

Você pode iniciar essa api localmente por meio do comando abaixo, porém as variavéis de ambiente DATABASE_URL e JWT_SECRETKEY serão necessárias.

```ssh
yarn dev
```

### POST /user/ (Criação de Usuário)

Padrão de corpo (`body`) para a requisição:

```json
{
    "name": "José da Silva",
    "email": "josedasilva@email.com",
    "password": "12345678"
}
```

Padrão de resposta:

```json
{
    "message": "Cadastro realizado com sucesso!"
}
```

### POST /user/login (Login)

Padrão de corpo (`body`) para a requisição:

```json
{
    "email": "josedasilva@email.com",
    "password": "12345678"
}
```

Padrão de resposta:

```json
{
	"user": {
		"id": "62a8d73efef5dcd41200bef3",
		"name": "José da Silva",
		"email": "josedasilva@email.com",
                "favoriteGames": []
	},
	"token": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE"
}
```

### GET /user/autologin (Autologin)

Será necessário o envio da token no `headers`

```json
//Este token é somente um exemplo
{
	"headers": {
        "auth": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE",
    }
}
```

Padrão de resposta:

```json
{
	"user": {
		"id": "62a8d73efef5dcd41200bef3",
		"name": "José da Silva",
		"email": "josedasilva@email.com",
                "favoriteGames": []
	}
}
```

### PATCH /user/favorites (Atualizar Favoritos)

Será necessário o envio da token no `headers`

```json
//Este token é somente um exemplo
{
	"headers": {
        "auth": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE",
    }
}
```

Padrão de corpo (`body`) para a requisição:

```json
{
    "favoriteGames": [
        {
            "id": 1,
            "title": "League of Legends",
            "thumbnail": "https://www.google.com.br",
            "genre": "MOBA",
        }
    ],
}
```

Padrão de resposta:

```json
{
    "message": "Alteração realizada com sucesso!"
}
```

### Erros

Padrão de erro para todas as rotas

```json
{
	"error": "Mensagem de erro..."	
}
```
