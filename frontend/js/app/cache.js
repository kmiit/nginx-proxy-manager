const UserModel = require('../models/user');

let cache = {
    User:    new UserModel.Model(),
    locale:  navigator.language,
    version: null
};

module.exports = cache;

