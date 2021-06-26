const { getAll } = require('../data/user')
const { verifyToken, getToken } = require('../utils/auth')

module.exports = () => ({
    path: '/users',
    method: 'GET',
    response: async (req, res, querystring, data, params) => {
        // authorization: Bearer seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsYXVkaW8ucm9qYXMiLCJpYXQiOjE2MjI3NjE1MTMsImV4cCI6MTYyMjc2MzMxM30.FLO7dRY8hVJAFyhAcQ_HaareLPK7pKLZbXxGVECykqE
        const isAuth = await verifyToken(getToken(req))
        if (isAuth) {
            const result = await getAll()
            return {
                data: result,
                status: 200,
            }
        }
        return {
            data: {},
            status: 403,
        }
    },
    delay: 0,
});