const { remove } = require('../data/product')
const { verifyToken, getToken } = require('../utils/auth')

module.exports = () => ({
    path: '/products/:id',
    method: 'DELETE',
    response: async (req, res, querystring, data, params) => {
        const isAuth = await verifyToken(getToken(req))
        if (isAuth) {
            await remove(params[0])
            return {
                data: {},
                status: 204,
            }
        }
        return {
            data: {},
            status: 403,
        }

    },
    delay: 0,
});