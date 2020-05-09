// ==UserScript==
// @name         Hack Forums Profile Citation Button
// @namespace    Working Profile Citation
// @version      1.0
// @description  Button apprears next to the adv card. Wait for the page to load and the button will show up too.
// @author       eXceptional - 1160828
// @match        *hackforums.net/member.php?action=profile&uid=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_setClipboard
// @updateURL    https://github.com/ameyarora/hf_scripts/raw/master/Profile%20Citation.user.js
// @downloadURL  https://github.com/ameyarora/hf_scripts/raw/master/Profile%20Citation.user.js
// @iconURL      https://raw.githubusercontent.com/ameyarora/master/icon.png
// ==/UserScript==


$( document ).ready(function() {
    $(".largetext").eq(1).find("span").after('<button id="citeLink" class="button" style="margin-left: 5px;">Cite</button>');
    citeLink = document.getElementById("citeLink");
    citeLink.addEventListener("click", citateProfile, false);
});



function citateProfile(){
    uid = window.location.href.replace(/[^0-9]/g, '');
    username = $(".largetext").eq(0).find("span").last().text();
    color = ($(".largetext").eq(0).find("span").last().css("color"));
    color = hexc(color);
    toCopy =  "[url=http://www.hackforums.net/member.php?action=profile&uid=" + uid + "][color=" + color + "][b]" + username + "[/color][/b][/url]";
    GM_setClipboard (toCopy);
    $(this).fadeOut(200, function(){
        $(this).text("Copied!");
    }).fadeIn(200).delay(500).fadeOut(200, function(){
        $(this).text("Cite");
    }).fadeIn(200);
}

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
}
