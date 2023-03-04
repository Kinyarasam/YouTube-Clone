#!/usr/bin/env node
const express = require('express');

require('dotenv').config();

/**
 * Port number.
 * @const
 */
const port = process.env.PORT || 4000;


/**
 * Express app
 * @const
 */
const app = express();

/**
 * Listen on port.
 * @name listen
 * @memberof module:server~app
 * @param {number} port - port number
 * @param {Function} callback - Callback function.
 */
const start = () => {
  app.listen(port, () => {
    console.log(`[+] Listening on port ${port}`);
  });
};

start();

module.exports = start;
