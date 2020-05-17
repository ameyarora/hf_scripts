// ==UserScript==
// @name            Hack Forums Quick Commands
// @namespace       ALT+R | ALT+I | ALT+C | ALT+Q
// @author          ameyarora
// @description     Make a quick spoiler tag around your text when making a new thread or post.
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @require			http://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js
// @match           *hackforums.net/newreply.php?tid=*
// @match           *hackforums.net/showthread.php?tid=*
// @match           *hackforums.net/showthread.php?tid=*
// @match           *hackforums.net/private.php?action=send*
// @match           *hackforums.net/newthread.php?fid=*
// @updateURL       https://github.com/ameyarora/hf_scripts/raw/master/QuickCommands.user.js
// @downloadURL     https://github.com/ameyarora/hf_scripts/raw/master/QuickCommands.user.js
// @version         1.0
// @iconURL         https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// ==/UserScript==

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
	return text;
}

shortcut.add("ALT+R",function() {
    str = getSelectionText();
    var value = $("textarea:focus").val();
    value = value.replace(str,"[sp]"+str+"[/sp]");
    $("textarea:focus").val(value);
});

shortcut.add("ALT+I",function() {
    str = getSelectionText();
    var value = $("textarea:focus").val();
    value = value.replace(str,"[img]"+str+"[/img]");
    $("textarea:focus").val(value);
});

shortcut.add("ALT+C",function() {
    str = getSelectionText();
    var value = $("textarea:focus").val();
    value = value.replace(str,"[code]"+str+"[/code]");
    $("textarea:focus").val(value);
});

shortcut.add("ALT+Q",function() {
    str = getSelectionText();
    var value = $("textarea:focus").val();
    value = value.replace(str,"[quote]"+str+"[/quote]");
    $("textarea:focus").val(value);
});