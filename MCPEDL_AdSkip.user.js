// ==UserScript==
// @name         MCPEDL_AdSKip
// @namespace    http://github.com/quoty0
// @version      1.0
// @updateURL    https://github.com/Quoty0/userscript/raw/master/MCPEDL_AdSkip.user.js
// @downloadURL  https://github.com/Quoty0/userscript/raw/master/MCPEDL_AdSkip.user.js
// @description  Skip MCPEDL download waiting times
// @author       Quoty0
// @match        *://mcpedl.com/*
// @icon         https://mcpedl.com/_nuxt/img/logo.e39b598.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ogSetInterval = window.setInterval;
    window.setInterval = function(callback, delay, ...args) {
        return ogSetInterval(callback, delay/10000, ...args);
    };
})();
