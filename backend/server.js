#!/usr/bin/env node
import express from 'express';
import dotenv from'dotenv'

dotenv.config();

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

try {
  start();
} catch (err) {
  console.log('Server could not be started...\nError: ', err)
}

export default app;
