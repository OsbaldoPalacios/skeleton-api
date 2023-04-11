const bcrypt = require('bcrypt');

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

//? Retorna un booleano
const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}