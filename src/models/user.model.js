const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        utoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

module.exports = User;