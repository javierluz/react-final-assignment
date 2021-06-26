const { getByKey } = require('../data/user')
const { generateAccessToken } = require('../utils/auth')

/*
localhost:4000/auth/login

{
    "username": "claudio.rojas",
    "password": "123.123"
}

*/

module.exports = () => ({
    path: '/auth/login',
    method: 'POST',
    response: async (req, res, querystring, data, params) => {
        const r = await getByKey('username', data.username)
        if (r.password === data.password) {
            return {
                data: {
                    jwt: generateAccessToken({ username: data.username }),
                },
                status: 200,
            }
        }
        return {
            data: {
                login: false,
            },
            status: 401,
        }
    },
    delay: 0,
})