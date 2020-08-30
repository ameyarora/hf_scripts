// ==UserScript==
// @name             Hack Forums Quick Rep MemberList
// @author           ameyarora
// @namespace        https://github.com/ameyarora/hf_scripts
// @version          1.0
// @description      Makes giving away reps super easy on member list.
// @require          https://code.jquery.com/jquery-3.1.1.js
// @match            *://hackforums.net/memberlist.php
// @copyright        2020+
// @updateURL        https://github.com/ameyarora/hf_scripts/raw/master/Quick%20Rep%20MemberList.user.js
// @downloadURL      https://github.com/ameyarora/hf_scripts/raw/master/Quick%20Rep%20MemberList.user.js
// @iconURL          https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==
// ------------------------------ Change Log ----------------------------
// version 1.0.0: Beta Release for waifu trash (UID=4595248)
// ------------------------------ Dev Notes -----------------------------
// If you like this script, test it out on me :)
// ------------------------------ Script ------------------------------
if ($("#content").length > 0){
    $(".memberlistprofile").each(function (index) {
        // If post collapsed
        if (!$(this).find(".memberlistname > strong > a").attr('href') > 0)
            return true;
        var usernameUID = $(this).find(".memberlistname > strong > a").attr('href').replace(/\D/g, '');
        var usernameName = $(this).find(".memberlistname > strong > a > span").text();
        // Append button
        $(this).find(".memberlistname").append($("<br><a>").attr({
            "title": "Quick Rep " + usernameName,
            "onclick": "MyBB.reputation("+usernameUID+"); return false;",
            "href":"javascript:void(0);"})
                                               .text("Quick Rep")
                                               .css({ "cursor": "pointer", "margin-right": "5px" })
                                               .addClass("button"));
    });
} else if ($(".postbit_report").length > 0){
    $(".postbit_report").each(function (index) {
        var usernameUID = $(this).parent().next().attr("href").replace(/\D/g, '');
        var usernameName = $(this).parent().next().children().text();
        $(this).prepend($("<a>").append("<span>").attr({
            "title": "Quick Rep " + usernameName,
            "onclick": "MyBB.reputation("+usernameUID+"); return false;",
            "href":"javascript:void(0);"})
                        .text("Quick Rep")
                        .css({ "cursor": "pointer", "margin-right": "5px" })
                        .addClass(""));
    });
}
