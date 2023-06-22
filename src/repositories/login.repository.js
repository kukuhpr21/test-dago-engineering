const loginModel = require('../models/login.model');
const User = require('../models/user.model');

function findByUsername(username) {
    return loginModel.findOne({
        where: {
            username: username
        },
        include: [User]
    });
}

function save(username, password, userId) {
    return loginModel.create({
        username: username,
        password: password,
        user_id: userId,
    });
}

module.exports = {
    findByUsername,
    save,
}