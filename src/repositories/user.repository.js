const usersModel = require('../models/user.model');

function all() {
    return usersModel.findAll();
}

function findById(id) {
    return usersModel.findOne({
        where: {
            id: id
        }
    });
}

function save(name, email, phone, address) {
    return usersModel.create({
        name: name,
        email: email,
        phone: phone,
        address: address,
    });
}

function remove(id) {
    return usersModel.destroy({
        where: {
          id: id
        }
    });
}

module.exports = {
    all,
    findById,
    save,
    remove,
}