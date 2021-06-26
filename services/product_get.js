const { get } = require('../data/product')

module.exports = () => ({
    path: '/products/:id',
    method: 'GET',
    response: async(req, res, querystring, data, params) => {
        const result = await get(params[0])
        return {
            data: result,
            status: 200,
        }
    },
    delay: 0,
});