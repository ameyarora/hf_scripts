// ==UserScript==
// @name            Hack Forums Auto Fill News
// @author          ameyarora
// @namespace       Automatically add the template to fill news
// @description     Automatically add the template to fill news
// @include         *hackforums.net/showthread.php?tid=5997436
// @include         *hackforums.net/newreply.php?tid=5997436
// @version         1.0
// @copyright       2020+
// @updateURL       https://github.com/ameyarora/hf_scripts/raw/master/NewsAutofill.user.js
// @downloadURL     https://github.com/ameyarora/hf_scripts/raw/master/NewsAutofill.user.js
// @iconURL         https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==

if (window.location.href.includes("hackforums.net/showthread.php?tid=5997436")){
    text = '[b][color=#00e4ff]Briefly describe the event: [/color][/b]\n[b][color=#00e4ff]Any important links: [/color][/b]';
    document.getElementById('message').value = text;
} else if (window.location.href.includes("hackforums.net/newreply.php?tid=5997436")){
    text = '[b][color=#00e4ff]Briefly describe the event: [/color][/b]\n[b][color=#00e4ff]Any important links: [/color][/b]';
    document.querySelector('textarea[style="width: 508px; height: 383px;"]').value = text;
}