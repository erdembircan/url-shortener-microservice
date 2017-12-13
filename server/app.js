const express = require('express');
const path = require('path');
const connectMongo = require('./mongoDbConnector');
const URL = require('url');
const config = require('./config');

const { incrementSequence } = require('./utils');

module.exports = () =>
  connectMongo().then((db) => {
    const app = express();
    app.set('port', process.env.PORT || config.serverPort);

    app.use(express.static(path.resolve(__dirname, 'public')));

    app.get('/', (req, res) => {
      res.sendFile('./public/index.html');
    });

    app.get('/new/*', (req, res) => {
      if (isNaN(req.params[0])) {
        const parsedUrl = URL.parse(req.params[0]);

        if (!parsedUrl.host) {
          res.json({ error: 'Invalid URL' });
        } else {
          incrementSequence('urlId', db.URL).then((id) => {
            db.URL.insert({
              id,
              url: parsedUrl.href,
            })
              .then((obj) => {
                res.json({
                  original_url: obj.ops[0].url,
                  short_url: `${config.host}/${obj.ops[0].id}`,
                });
              })
              .catch((err) => {
                if (err.code === 11000) {
                  db.URL.findOne({ url: parsedUrl.href }).then((obj) => {
                    res.json({
                      original_url: obj.url,
                      short_url: `${config.host}/${obj.id}`,
                    });
                  });
                } else res.json({ error: `An error occured: ${err}` });
              });
          });
        }
      }
    });

    app.get('/*', (req, res) => {
      const id = parseInt(req.params[0]);
      db.URL.findOne({ id })
        .then((obj) => {
          res.redirect(obj.url);
        })
        .catch((err) => {
          res.send('No link found with the given ID.');
        });
    });

    return app;
  });
