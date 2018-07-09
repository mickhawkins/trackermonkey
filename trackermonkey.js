// ==UserScript==
// @name         Tracker Monkey
// @namespace    moodle
// @version      0.1
// @description  Redirect MDL searches to Tracker
// @author       Mick Hawkins
// @include      /^https:\/\/(www\.)?duckduckgo\.com\/\?q=MDL-*/
// @include      /^https:\/\/(www\.)?google\.com(\.[a-z]{2,})?\/(search)?\?(.*&)?q=MDL-*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.stop();

    var url = window.location.href;
    var patt = new RegExp("MDL-[0-9]+");
    var mdl_ref = patt.exec(url);

    window.location = 'https://tracker.moodle.org/browse/' + mdl_ref;
})();
