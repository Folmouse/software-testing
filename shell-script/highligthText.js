// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-29
// @description  try to take over the world!
// @author       You
// @match        https://chatgpt.com/c/605f5d8d-1d6f-4eab-aabb-edbba80bd22b
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function highligthText(text){
        if (!text) return;
        const regex = new RegExp('$(text)','gi');
        document.body.innerHTML = document.body.innerHTML.replace(regex, '<span style="background-color: yellow;">$1</span>');
    }
    const textToHighlight = prompt('Enter the text to highlight: ');
    highligthText(textToHighlight);
    // Your code here...
})();