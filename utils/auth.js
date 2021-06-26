const jwt = require('jsonwebtoken')

// require('crypto').randomBytes(64).toString('hex')
const TOKEN_SECRET = '33a5334558e8b94e3e538b34dd5c7ed27576024d8ec4c85a7f178129c4152a5097c211022a5a0b0ed56105dc797d278206ddc092b38aa4bb76011d6c3720bd32'
function generateAccessToken(username) {
    return jwt.sign(username, TOKEN_SECRET, { expiresIn: '1800s' });
}

async function verifyToken(token) {
    try {
        const result = await jwt.verify(token, TOKEN_SECRET)
        if (result) return true
        return false
    } catch (error) {
        return false
    }
}

const getToken = (req) => {
    const t = req.headers['authorization']
    if (t) {
        const arrT = t.split(' ')
        if (arrT[1]) return arrT[1]
    }
    return ''
}

module.exports.TOKEN_SECRET = TOKEN_SECRET

module.exports.generateAccessToken = generateAccessToken
module.exports.verifyToken = verifyToken
module.exports.getToken = getToken