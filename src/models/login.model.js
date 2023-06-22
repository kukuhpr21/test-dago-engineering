const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./user.model');

const Login = db.define("login", {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {         // User belongsTo Company 1:1
          model: 'users',
          key: 'id'
        }
    },
    password: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'user',
          key: 'id'
        }
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

Login.belongsTo(User, {foreignKey: 'user_id'})

module.exports = Login;