const userRepository = require('../repositories/user.repository');
const response = require('../helpers/response');

async function all() {
    try {
        const users = await userRepository.all();

        if (users.length > 0) {
            return response.layer(true, 200, "user already exist", users);
        } else {
            return response.layer(false, 404, "user not exist");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function findById(req) {
    try {
        const user = await userRepository.findById(req.params.id);

        if (user) {
            return response.layer(true, 200, "user already exist", user);
        } else {
            return response.layer(false, 404, "user not found");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function save(req) {
    try {
        const user = await userRepository.save(
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.address
        );

        if (user) {
            return response.layer(true, 201, "success create product", product);
        } else {
            return response.layer(false, 404, "failed create product");
        }
    } catch(error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

module.exports = {
    all,
    findById,
    save,
}