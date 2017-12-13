const appP = require('./app');
const config = require('./config');
const chalk = require('chalk');

appP()
  .then((app) => {
    app.listen(app.get('port'), () => {
      console.log(`${chalk.bgGreen.bold('[SERVER]:')}🌍  Server started at port: ${app.get('port')}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
