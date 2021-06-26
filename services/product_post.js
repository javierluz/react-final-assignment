const { add } = require('../data/product')
const { verifyToken, getToken } = require('../utils/auth')

module.exports = () => ({
    path: '/products',
    method: 'POST',
    response: async (req, res, querystring, data, params) => {
        const isAuth = await verifyToken(getToken(req))
        if (isAuth) {
            const result = await add(data)
            return {
                data: result,
                status: 201,
            }
        }
        return {
            data: {},
            status: 403,
        }
    },
    delay: 0,
});