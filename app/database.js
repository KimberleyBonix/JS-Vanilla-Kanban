const { Sequelize } = require('sequelize');

// Log sequelize to postgres DB
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  define: {
    underscored: true,
  },
  dialectOptions: {
    ssl: {require: true}
  }
});

module.exports = sequelize;