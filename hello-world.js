// Hello World JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

// self-executing "global" anonymous function
// it's here to keep variable and function scope
// contained within our script
(function () {

    // use strict enforces more rules
    // rules make us better programmers
    "use strict";

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    function byID(id) {
        return document.getElementById(id);
    }
    // === === === === === === === === === === === === ===
    // === === === ===   global variables  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    // initializes a string variable
    var new_column1 = "<p>Let go of inhibitions, be with us</p>";
    new_column1 += "<img id=\"orbit\" src=\"images/orbit.jpeg\" ";
    new_column1 += "alt=\"orbit\">";
    var new_column2 = "<p>Let your freedom become ours</p>";
    new_column2 += "<img id=\"planet-hand\" src=\"images/planet-hand.jpeg\" ";
    new_column2 += "alt=\"planet-hand\">";
    var old_column1 = "";
    var old_column2 = "";

    // this is how we output to the console log
    // useful for debugging your programs!
    console.log("-- hello_world.js starting --");
    console.log("new_column1: " + new_column1);
    console.log("old_column1: " + old_column1);
    console.log("new_column2: " + new_column2);
    console.log("old_column2: " + old_column2);
    console.log("-----------------------------\n\n\n");

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    function toggleColumn1() {

        // grab the current column1 column and save it!
        old_column1 = byID("hello-world-column1").innerHTML;

        // replace the screen contents of column1 column with new_text
        byID("hello-world-column1").innerHTML = new_column1;

        // this allows the "toggle" - we swap the old for the new!
        new_column1 = old_column1;

    }

    function toggleColumn2() {

        // grab the current column1 column and save it!
        old_column2 = byID("hello-world-column2").innerHTML;

        // replace the screen contents of column1 column with new_text
        byID("hello-world-column2").innerHTML = new_column2;

        // this allows the "toggle" - we swap the old for the new!
        new_column2 = old_column2;

    }
    byID("hello-world-column1").addEventListener("click", toggleColumn1);
    byID("hello-world-column2").addEventListener("click", toggleColumn2);
}());
