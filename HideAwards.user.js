// ==UserScript==
// @name         Hack Forums Hide Awards
// @author       ameyarora
// @namespace    https://github.com/ameyarora/hf_scripts/
// @version      1.0
// @description  Hide all thread awards.
// @require      https://code.jquery.com/jquery-3.1.1.js
// @match        *://hackforums.net/showthread.php?tid=*
// @copyright    2020+
// @updateURL    https://github.com/ameyarora/hf_scripts/raw/master/HideAwards.user.js
// @downloadURL  https://github.com/ameyarora/hf_scripts/raw/master/HideAwards.user.js
// @iconURL      https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==

$("#posts").each(function( index ) {
    $(this).find(".post_myawards > span").remove();
});