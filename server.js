// server imports
import express from 'express';
import path from 'path';
import compression from 'compression';

// react imports
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes';

// le server

const APP_TITLE = 'My First React Router App';

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory works

app.get('*', function(req, res) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>${APP_TITLE}</title>
    <link rel="stylesheet" href="/assets/index.css">
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
  `;
}

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log('production server running at localhost: ' + PORT);
});
