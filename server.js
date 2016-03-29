// FIXME:

// this does currently not work with react router require.ensure and webpack chunks.
// it creates multiple server chunks for each require. have to figure out how to prevent this.
// meanwhile use simple express server to serve public directory in server.js

// server imports
// import express from 'express';
// import path from 'path';
// import compression from 'compression';

const express = require('express');
const path = require('path');
const compression = require('compression');


// react imports
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import routes from './src/routes';

// le server

const APP_TITLE = 'React Labs';

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory works

app.get('*', function (req, res) {
  // res.sendFile(__dirname + '/index.html');
  res.send(renderPage(''));
});

// app.get('*', function(req, res) {
//   match({ routes: routes, location: req.url }, (err, redirect, props) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else if (redirect) {
//       res.redirect(redirect.pathname + redirect.search);
//     } else if (props) {
//       const appHtml = renderToString(<RouterContext {...props}/>);
//       res.send(renderPage(appHtml));
//     } else {
//       res.status(404).send('Not Found');
//     }
//   });
// });

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>${APP_TITLE}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css"
        integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/assets/index.css">
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
  `;
}

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log('production server running at localhost: ' + PORT);
});
