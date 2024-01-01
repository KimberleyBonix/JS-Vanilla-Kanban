const { Sequelize } = require('sequelize');

// Log sequelize to postgres DB
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  define: {
    underscored: true,
  }
});

module.exports = sequelize;