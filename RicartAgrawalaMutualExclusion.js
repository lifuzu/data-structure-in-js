// RicartAgrawalaMutualExclusion.js

var util = require('util');
var EventEmitter = require('events').EventEmitter;
var redis = require("redis");
var sub = redis.createClient();
var pub = redis.createClient();

// @options - an object with 'timestamp' and other properties
var RicardAgrawala = function(options) {
	// store the reference of 'this' to 'self'
	var self = this;

	var state = "Initial";
	var timestamp = 1;
	var pid = process.pid;
	var queue = [];

	this.on('request', function(args) {
		console.log('EventEmitter: ' + args.A);
	});

	// enter at process pi
	var enter = function () {
		self.state = 'Wanted';
		self.timestamp = Date.now();
		self._multicast({'timestamp': self.timestamp, 'pid': self.pid});
		self.on('message', function(args) {
			// wait for 'Reply'

			// if collecting N-1, get client number
			self.state = "Held";
		});
	};

	// receipt of a request at pi
	// @args - an object with 'timestamp' and 'pid'
	this.on('message', function(args) {
		if ((state === 'Held') || (self.state === 'Wanted') && (args.timestamp < self.timestamp)) {
			// queue the message
			self.queue.push(args);
		}
		else {
			var msg = {'type': 'reply', 'args': args};
			self._send(msg, args.pid);
		}
	});

	// exit at process pi
	var exit = function(args) {
		self.state = "Released";
		while(self.queue.length > 0) {
			var msg = {'type': 'reply', 'args': args};
			self._send(msg, self.queue.pop().pid);
		}
	};

	// send message to pi
	var _send = function(msg, pid) {

	};

	// multicast message
	// @args - an object with 'timestamp' and 'pid'
	var _multicast = function(args) {
		pub.publish(args);
	};

	// on
	sub.on("message", function (channel, message) {
    console.log("client1 channel " + channel + ": " + message);
    self.emit('message', args);
  });
  sub.subscribe("a nice channel");
};

// extend the EventEmitters class
util.inherits(RicardAgrawala, EventEmitter);

// specify that this module is a refrence to the RicardAgrawala class
module.exports = RicardAgrawala;


// RicartAgrawalaMutualExclusion_starter.js
var ra = new RicardAgrawala();
setInterval(function () {
	ra.emit('request', {'A': process.pid, 'B': 2});
}, 5000);
