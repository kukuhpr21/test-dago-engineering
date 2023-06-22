const authService = require('../services/auth.service');
const response = require('../helpers/response');

const signIn = async (req, res, next) => {
    const result = await authService.signIn(req);
    response.client(res, result.status, result.message, result.data);
};

const signUp = async (req, res, next) => {
    const result = await authService.signUp(req);
    response.client(res, result.status, result.message, result.data);
};

module.exports = {
    signIn,
    signUp,
}