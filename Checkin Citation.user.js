// ==UserScript==
// @name         Hack Forums Daily Checkin Citation
// @namespace    This Userscript is specially made for Zero
// @version      1.0
// @description  Button apprears next to the adv card. Wait for the page to load and the button will show up too.
// @author       ameyarora
// @contributor  eXceptional - 1160828
// @match        *hackforums.net/member.php?action=profile&uid=*
// @match        *hackforums.net/myawards.php?awid=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_setClipboard
// @updateURL    https://github.com/ameyarora/hf_scripts/raw/master/Checkin%20Citation.user.js
// @downloadURL  https://github.com/ameyarora/hf_scripts/raw/master/Checkin%20Citation.user.js
// @iconURL      https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==
// ------------------------------ Change Log ----------------------------
// version 1.0.0: Beta Release
// ------------------------------ Dev Codes ----------------------------
//$(".trow1").find("a").after('<button id="citeLink" class="button" style="margin-left: 5px;">Cite</button>');
//$(".trow2").find("a").after('<button id="citeLink" class="button" style="margin-left: 5px;">Cite</button>');
//document.getElementsByTagName("strong")[i++].childNodes[0].attributes.href.textContent
// ---------------------------------------------------------------------

//Profile
$(".largetext").eq(1).find("span").after('<button id="citeLink" class="button" style="margin-left: 5px;">Checkin Cite</button>');
citeLink = document.getElementById("citeLink");
citeLink.addEventListener("click", citateProfile, false);

function citateProfile(){
    uid = window.location.href.replace(/[^0-9]/g, '');
    username = $(".largetext").eq(0).find("span").last().text();
    color = ($(".largetext").eq(0).find("span").last().css("color"));
    color = hexc(color);
    toCopy =  "[mention=" + uid + "]";
    GM_setClipboard (toCopy);
    $(this).fadeOut(200, function(){
        $(this).text("Copied!");
    }).fadeIn(200).delay(500).fadeOut(200, function(){
        $(this).text("Checkin Cite");
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
