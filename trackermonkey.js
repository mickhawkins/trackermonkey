// ==UserScript==
// @name         Tracker Monkey
// @namespace    moodle
// @version      0.1
// @description  Redirect MDL searches to Tracker
// @author       Mick Hawkins
// @source       https://github.com/mickhawkins/trackermonkey
// @include      /^https:\/\/(www\.)?duckduckgo\.com\/\?q=MDL*/
// @include      /^https:\/\/(www\.)?google\.com(\.[a-z]{2,})?\/(search)?\?(.*&)?q=MDL*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.stop();

    var url = window.location.href;
    var patt = /MDL([^&]*)(&.*)*/i;
    var result = patt.exec(url);
    var redirect = 'https://tracker.moodle.org/';

    if (result[1] != undefined) {
        var search = result[1];

        if (search.charAt(0) == '-') {
            redirect += 'browse/MDL' + result[1];
        } else if (search.indexOf('me') < 2) {
            redirect += 'issues/?filter=-1';
        }
    }

    window.location = redirect;
})();
