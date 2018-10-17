const countdown = require("./countdown");

countdown.setDecrementsPerSecond(3);

let helloWorld = function(){
    console.log("Hallo Welt!")
};

countdown.setCountdown(helloWorld, 10);