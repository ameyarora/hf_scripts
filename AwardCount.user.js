// ==UserScript==
// @name          Hack Forums Award Count
// @author        ameyarora
// @namespace     https://github.com/ameyarora/hf_scripts
// @version       1.0
// @description   Total award count on award page.
// @require       https://code.jquery.com/jquery-3.1.1.js
// @match         *://hackforums.net/myawards.php?awid=*
// @copyright     2020+
// @updateURL     https://github.com/ameyarora/hf_scripts/raw/master/AwardCount.user.js
// @downloadURL   https://github.com/ameyarora/hf_scripts/raw/master/AwardCount.user.js
// @iconURL       https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==
// ------------------------------ Script ------------------------------

$('strong:contains("My Awards")').after($("<span>").addClass("float_right").text($('.award_sprite').length + " Awards Granted."));