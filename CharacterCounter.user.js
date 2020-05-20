// ==UserScript==
// @name         Hack Forums Character Counter
// @author       ameyarora
// @namespace    https://github.com/ameyarora/hf_scripts
// @version      1.0
// @description  Adds live character count on hack forums
// @require      https://code.jquery.com/jquery-3.1.1.js
// @require      https://raw.githubusercontent.com/ameyarora/ThreadDesignGenerator/master/JS/xbbcode.js
// @match        *hackforums.net/showthread.php?tid=*
// @match        *hackforums.net/newreply.php?tid=*
// @match        *hackforums.net/newthread.php?fid=*
// @match        *hackforums.net/editpost.php?pid=*
// @copyright    2020+
// @updateURL    https://github.com/ameyarora/hf_scripts//raw/master/CharacterCounter.user.js
// @downloadURL  https://github.com/ameyarora/hf_scripts//raw/master/CharacterCounter.user.js
// @iconURL      https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ------------------------------ Change Log ----------------------------
// version 1.0: Release
// ==/UserScript==
// ------------------------------ On Page ------------------------------

    var CharCount;
    if (window.location.href.includes("hackforums.net/showthread.php?tid=")) {
        //
        CharCount = $("#quickreply_e").find("tr:eq(0) > td:eq(0) > span:eq(0)");
        CharCount.after($("<span>").attr("id", "charLabel").text(""));
        CharCount.after($("<br />"));
        CharCount.after($("<br />"));
        $('#message').bind('input propertychange', function () {
            countNow();
        });
    }
    else if (window.location.href.includes("hackforums.net/newreply.php?tid=") ||
             window.location.href.includes("hackforums.net/newthread.php?fid=") ||
             window.location.href.includes("hackforums.net/editpost.php?pid=")) {
        CharCount = $("strong:contains(Post Options:)");
        CharCount.after($("<br />"));
        CharCount.after($("<br />"));
        CharCount.after($("<span>").attr("id", "charLabel").text(""));
        CharCount.after($("<br />"));
        CharCount.after($("<br />"));
        $('textarea').bind('input propertychange', function () {
            countNow();
        });
    }

function countNow() {
    const baseStyle = {
        "padding": "3px",
        "padding-left": "10px",
        "padding-right": "10px",
        "border-radius": "5px"
    }
    const minLimit = 26;
    const minLimitTxt = "Too Low: ";
    const minLimitStyle = {
        "background-color": "#d8b4b2",
        "border-color": "#d8b4b2",
        "color": "#891a14",

    };
    const limitText = "Good: ";
    const limitStyle = {
        "background-color": "#b2d8b9",
        "border-color": "#b2d8b9",
        "color": "#14892c",
    };

    const minLucky = 100;
    const minLuckyTxt = "Green Egg: ";
    const minLucky1 = 500;
    const minLuckyTxt1 = "Red Egg: ";
    const minLucky2 = 1200;
    const minLuckyTxt2 = "Blue Egg: ";
    const minLucky3 = 2500;
    const minLuckyTxt3 = "Gold Egg: ";
    const minLuckyStyle = {
        "background-color": "#b6b2d8",
        "border-color": "#b6b2d8",
        "color": "#201489",
    };

    // L33t: 12,000
    const maxLimitL33t = 12000;
    const maxLimitTxt = "Too High: ";
    const maxLimitStyleL33t = {
        "background-color": "#99FF00",
        "border-color": "#99FF00",
        "color": "#395211",
    };
    // Ub3r: 18,000
    const maxLimitUb3r = 18000;
    const maxLimitStyleUb3r = {
        "background-color": "#00AAFF",
        "border-color": "#00AAFF",
        "color": "#113a4f",
    };
    // V3nd0r: 24,000
    const maxLimitV3nd0r = 24000;
    const maxLimitStyleEp1c = {
        "background-color": "#FFA500",
        "border-color": "#FFA500",
        "color": "#805b16",
    };

    var charReason = "";
    var charStyle;

    var charLength = 0;
    var textInput = "";
    if (window.location.href.includes("hackforums.net/showthread.php?tid=")) {
        textInput = $("#message").val();
    } else {
        textInput = $("textarea[dir='ltr']").val();
    }
    // Quotes
    textInput = textInput.replace(/\[\/?quote.*[^\]]*\]/g, '');
    // Images
    textInput = textInput.replace(/\[img\].*\[\/img\]/g, '');
    // Emojis
    textInput = textInput.replace(/:([^:][^:]*:)?/g, '');
    // Spaces
    textInput = textInput.replace(/ /g, '');
    // New Lines
    textInput = textInput.replace(/(\r\n|\n|\r)/gm, "");
    // Reply Length
    charLength = textInput.length;
    // Too Small
    if (charLength < minLimit) {
        charReason = minLimitTxt;
        charStyle = minLimitStyle;
    }
    // Good
    else if (charLength >= minLimit && charLength < minLucky) {
        charReason = limitText;
        charStyle = limitStyle;
    }
    // Green
    else if (charLength >= minLucky && charLength < minLucky1) {
        charReason = minLuckyTxt;
        charStyle = minLuckyStyle;
    }
    // Red
    else if (charLength >= minLucky1 && charLength < minLucky2) {
        charReason = minLuckyTxt1;
        charStyle = minLuckyStyle;
    }
    // Blue
    else if (charLength >= minLucky2 && charLength < minLucky3) {
        charReason = minLuckyTxt2;
        charStyle = minLuckyStyle;
    }
    //Gold
    else if (charLength >= minLucky3 && charLength < maxLimitL33t) {
        charReason = minLuckyTxt3;
        charStyle = minLuckyStyle;
    }
    // Too Big - L33t
    else if (charLength >= maxLimitL33t && charLength < maxLimitUb3r) {
        charReason = maxLimitTxt;
        charStyle = maxLimitStyleL33t;
    }
    // Too Big - Ub3r
    else if (charLength >= maxLimitL33t && charLength < maxLimitV3nd0r) {
        charReason = maxLimitTxt;
        charStyle = maxLimitStyleUb3r;
    }
    // Too Big - V3nd0r
    else if (charLength >= maxLimitV3nd0r) {
        charReason = maxLimitTxt;
        charStyle = maxLimitStyleEp1c;
    }
    $("#charLabel").text(charReason + charLength);
    $("#charLabel").css(charStyle);
    $("#charLabel").css(baseStyle);
}