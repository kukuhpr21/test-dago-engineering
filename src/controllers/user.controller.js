const userService = require('../services/user.service');
const response = require('../helpers/response');

const all = async (req, res, next) => {
    const result = await userService.all();
    response.client(res, result.status, result.message, result.data);
};

const findById = async (req, res, next) => {
    const result = await userService.findById(req);
    response.client(res, result.status, result.message, result.data);
};

module.exports = {
    all,
    findById,
}