#  Simple API MOCK

## Usuarios disponibles para login

```json
{
  "id": 6,
  "data": [
    {
      "name": "Javier",
      "username": "javier_santaolalla",
      "email": "javier.s@gmail.com",
      "password": "123.123"
    },
    {
      "name": "Claudio",
      "username": "claudio.rojas",
      "email": "claudio.r@gmail.com",
      "password": "123.123"
    }
  ]
}
```

## Token JWT

los servicios protegidos se pueden consumir definiendo un header llamado `authorization`
y como valor `Bearer <TOKEN>`

## Endpoints

- POST /auth/login
Body

```json
{
  "username": "claudio.rojas",
  "password": "123.123"
}
```

- GET `/users` (Protegido con token JWT)
- DELETE `/products/:id` (Protegido con token JWT)
- POST `/products` (Protegido con token JWT)
- PUT `/products/:id` (Protegido con token JWT)
- GET `/products/:id`
- GET `/products`
