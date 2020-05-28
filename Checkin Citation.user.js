// ==UserScript==
// @name         Hack Forums Daily Checkin Citation
// @namespace    This Userscript is specially made for Zero
// @version      1.1
// @description  Button apprears next to the adv card. Wait for the page to load and the button will show up too.
// @author       ameyarora
// @contributor  eXceptional - 1160828
// @match        *hackforums.net/member.php?action=profile&uid=*
// @match        *hackforums.net/private.php?action=read&pmid=*
// @match        *hackforums.net/myawards.php?awid=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_setClipboard
// @updateURL    https://github.com/ameyarora/hf_scripts/raw/master/Checkin%20Citation.user.js
// @downloadURL  https://github.com/ameyarora/hf_scripts/raw/master/Checkin%20Citation.user.js
// @iconURL      https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==
// ------------------------------ Change Log ----------------------------
// version 1.1: Added PM Citation and changed it to @USERNAME@
// version 1.0: Beta Release
// ------------------------------ Dev Codes ----------------------------
//$(".trow1").find("a").after('<button id="citeLink" class="button" style="margin-left: 5px;">Cite</button>');
//$(".trow2").find("a").after('<button id="citeLink" class="button" style="margin-left: 5px;">Cite</button>');
//document.getElementsByTagName("strong")[i++].childNodes[0].attributes.href.textContent
// ---------------------------------------------------------------------

//Profile
if ( window.location.href.includes("hackforums.net/member.php?action=profile&uid=")) {
    $(".largetext").eq(1).find("span").after('<button id="citeLink" class="button" style="margin-left: 5px;">Checkin Cite</button>');
}
//Private Message
else if (window.location.href.includes("hackforums.net/private.php?action=read&pmid=")) {
    $(".largetext").eq(0).find("a").before('<button id="citeLink" class="button" style="margin-left: 5px;">Checkin Cite</button><br>');
}

citeLink = document.getElementById("citeLink");
citeLink.addEventListener("click", citateProfile, false);

function citateProfile(){
    username = $(".largetext").eq(0).find("span").last().text();
    toCopy =  "@" + username + "@";
    GM_setClipboard (toCopy);
    $(this).fadeOut(200, function(){
        $(this).text("Copied!");
    }).fadeIn(200).delay(500).fadeOut(200, function(){
        $(this).text("Checkin Cite");
    }).fadeIn(200);
}
