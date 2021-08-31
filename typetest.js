"use strict";
let maxNumberOfIterations;
let iteration;

init();

function init() {
    maxNumberOfIterations = 11;
    iteration = 0;

    loop();
}

function loop() {
    console.log("loop", iteration);
    iteration++;

    if (iteration < maxNumberOfIterations) {

        setTimeout(loop, 1000);


    }
}