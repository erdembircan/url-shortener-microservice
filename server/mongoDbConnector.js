const { MongoClient, Logger } = require('mongodb');
const chalk = require('chalk');
const config = require('./config');

module.exports = () =>
  MongoClient.connect(config.mongodbURL).then((database) => {
    Logger.setCurrentLogger((msg, state) => {
      console.log(`${chalk.bgBlue.bold('[MONGODB]')} ${msg}`);
    });

    Logger.setLevel('debug');

    Logger.filter('class', ['Cursor']);

    return {
      db: database.db('urlShort'),
      URL: database.db('urlShort').collection('url'),
    };
  });
