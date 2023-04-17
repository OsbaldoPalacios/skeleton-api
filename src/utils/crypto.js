const bcrypt = require('bcrypt');

const hashPassword = (plainPassword) => {
    const data = bcrypt.hashSync(plainPassword, 10)
    return data
};

//? Retorna un booleano
const comparePassword = (plainPassword, hashedPassword) => {
    const data = bcrypt.compareSync(plainPassword, hashedPassword)
    return data
};

module.exports = {
    hashPassword,
    comparePassword
};