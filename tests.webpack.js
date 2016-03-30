'use strict';
var context = require.context('./src', true, /_test\.jsx?$/);
context.keys().forEach(context);
