const Novica = require('../models/Novica');

const dataPool = {};

dataPool.allNovice = async () => {
  let query = await Novica.find().exec();
  console.log(query);
};

module.exports = dataPool;
