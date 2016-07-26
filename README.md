# node-shutdown-windows

> Shutdown / Reboot your machine running Windows from within Node.JS

## Install

```
$ npm install --save node-shutdown-windows
```

## Usage

```js
const shutDownWin = require('node-shutdown-windows');

shutDownWin.logoff();
//=> logs the current user off

shutDownWin.shutdown();
//=> shuts down the whole machine instantly

shutDownWin.shutdown(20);
//=> shuts down the whole machine in 20 seconds

shutDownWin.shutdown(20, true);
//=> shuts down the whole machine in 20 seconds, forceably killing all running applications

shutDownWin.shutdown(20, false, 'The system will shut down in 20 seconds');
//=> shuts down the whole machine in 20 seconds, displaying a message until that time

shutDownWin.reboot();
//=> reboots the whole machine instantly

shutDownWin.reboot(20);
//=> reboots the whole machine in 20 seconds

shutDownWin.reboot(20, true);
//=> reboots the whole machine in 20 seconds, forceably killing all running applications

shutDownWin.reboot(20, false, 'The system will reboot in 20 seconds');
//=> reboots the whole machine in 20 seconds, displaying a message until that time

shutDownWin.abort();
//=> aborts a startup / shutdown procedure
```

## Documentation

Please also take a look at https://technet.microsoft.com/de-de/library/bb491003.aspx, since this module is just a wrapper around the Windows `shutdown` command.

### logoff([timeout, force, message])

Logs off the current user.

* `timeout` {Number} Sets the timer for system logoff in seconds
* `force` {Boolean} Forces running applications to close
* `message` {String} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters

### shutdown([timeout, force, message])

Shuts down the local computer.

* `timeout` {Number} Sets the timer for system shutdown in seconds
* `force` {Boolean} Forces running applications to close
* `message` {String} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters

### reboot([timeout, force, message])

Reboots after shutdown.

* `timeout` {Number} Sets the timer for system shutdown in seconds
* `force` {Boolean} Forces running applications to close
* `message` {String} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters

### abort()

Aborts shutdown / logoff / reboot.

## License

ISC © [Benedikt Reiser](http://benedikt-reiser.de)
