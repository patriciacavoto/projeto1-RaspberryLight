var express = require('express');
var router = express.Router();
const Gpio = require('onoff').Gpio; 
const LED = new Gpio(4, 'out');

// acende o led conectado no pino 4 da raspberry
router.get('/on', function(req, res, next) {
    LED.writeSync(1);
    res.json({'status':'OK', 'data':'Led aceso'})
});

// apaga o led conectado no pino 4 da raspberry
router.get('/off', function(req, res, next) {
    LED.writeSync(0);
    res.json({'status':'OK', 'data':'Led apagado'})
});

module.exports = router;
