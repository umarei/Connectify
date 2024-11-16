require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5055,
  MONGO_URI: process.env.MONGO_URI,
};
