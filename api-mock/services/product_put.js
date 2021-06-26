const { update } = require('../data/product')
const { verifyToken, getToken } = require('../utils/auth')

module.exports = () => ({
    path: '/products/:id',
    method: 'PUT',
    response: async (req, res, querystring, data, params) => {
        const isAuth = await verifyToken(getToken(req))
        if (isAuth) {
            const result = await update(params[0], data)
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