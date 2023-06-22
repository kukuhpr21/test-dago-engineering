const loginRepository = require('../repositories/login.repository');
const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const response = require('../helpers/response');

async function signIn(req) {
    try {
        const userLogin = await loginRepository.findByUsername(req.body.username);

        if (userLogin) {
            const passwordMatch = await bcrypt.compare(req.body.password, userLogin.password);

            if (passwordMatch) {
                let userData = userLogin.user
                return response.layer(true, 200, "login successfully", userData);
            } else {
                return response.layer(false, 400, "invalid email or password");
            }
        } else {
            return response.layer(false, 400, "user not found"); 
        }
    } catch (error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

async function signUp(req) {
    try {
        const userLogin = await loginRepository.findByUsername(req.body.username);

        if (!userLogin) {
            const user = await userRepository.save(
                req.body.name,
                req.body.email,
                req.body.phone,
                req.body.address,
            );

            if (user) {
                const userLogin = loginRepository.save(
                    req.body.username,
                    bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTROUNDS))),
                    user.null,
                    );

                if (userLogin) {
                        const userData = {
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            address: user.address,
                            username: userLogin.username
                        }
                        return response.layer(true, 200, "sign up successfully", userData);
                    } else {
                        userRepository.remove(user.id);
                        return response.layer(false, 400, "failed sign up, invalid data user login");
                    }
            } else {
                return response.layer(false, 400, "failed sign up, invalid data user");
            }
        } else {
            return response.layer(false, 400, "username already used"); 
        }
    } catch (error) {
        return response.layer(false, 500, "internal server error", { error: error.message });
    }
}

module.exports = {
    signIn,
    signUp,
}