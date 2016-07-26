// see https://technet.microsoft.com/de-de/library/bb491003.aspx for details
// right now, only local shutdown / reboot / logoff is implemented.
// we need the ability to spawn processes
const spawn = require('child_process').spawn;
// shutdown command to be executed
const shutdownCmd = 'shutdown';

/**
 *  Logs off the current user
 *
 * @param {Number} timeout  Sets the timer for system shutdown in xx seconds
 * @param {any} force Forces running applications to close
 * @param {any} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters
 * @returns {ChildProcess}
 */
exports.logoff = function (timeout, force, message) {
  // check if force flag is provided
  force = !!force;
  // build argumnets
  let args = ['-l'];
  if (timeout) {
    args.push('-t');
    args.push(parseInt(timeout, 10));
  }
  if (force) {
    args.push('-f');
  }
  if (message) {
    args.push('-m');
    args.push(`"${message}"`);
  }
  // execute the shutdown command
  return spawn(shutdownCmd, args);
};

/**
 * Shuts down the local computer
 *
 * @param {Number} timeout  Sets the timer for system shutdown in xx seconds
 * @param {any} force Forces running applications to close
 * @param {any} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters
 * @returns {ChildProcess}
 */
exports.shutdown = function (timeout, force, message) {
  // check if force flag is provided
  force = !!force;
  // build argumnets
  let args = ['-s'];
  if (timeout) {
    args.push('-t');
    args.push(parseInt(timeout, 10));
  }
  if (force) {
    args.push('-f');
  }
  if (message) {
    args.push('-m');
    args.push(`"${message}"`);
  }
  // execute the shutdown command
  return spawn(shutdownCmd, args);
};

/**
 * Reboots after shutdown
 *
 * @param {Number} timeout  Sets the timer for system shutdown in xx seconds
 * @param {any} force Forces running applications to close
 * @param {any} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters
 * @returns {ChildProcess}
 */
exports.reboot = function (timeout, force, message) {
  // check if force flag is provided
  force = !!force;
  // build argumnets
  let args = ['-r'];
  if (timeout) {
    args.push('-t');
    args.push(parseInt(timeout, 10));
  }
  if (force) {
    args.push('-f');
  }
  if (message) {
    args.push('-m');
    args.push(`"${message}"`);
  }
  // execute the shutdown command
  return spawn(shutdownCmd, args);
};

/**
 * Aborts shutdown
 *
 * @returns {ChildProcess}
 */
exports.abort = function () {
  return spawn(shutdownCmd, ['-a']);
};
