// ==UserScript==
// @name        Hack Forums Count Lounge Posts
// @namespace   https://github.com/ameyarora/hf_scripts
// @description Lounge Post Count on Search Page
// @author      ameyarora
// @include     *hackforums.net/search.php*
// @require     http://code.jquery.com/jquery-2.2.2.min.js
// @version     1.0
// @copyright   2020+
// @updateURL   https://github.com/ameyarora/hf_scripts//raw/master/LoungePostCount.user.js
// @downloadURL https://github.com/ameyarora/hf_scripts//raw/master/LoungePostCount.user.js
// @iconURL     https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// @grant       GM_getValue
// ==/UserScript==

if ($("td.tcat:nth-child(2) > span:nth-child(1) > strong:nth-child(1) > a:nth-child(1)").html() === "Author") {
	var nb_posts = $(".tborder tbody:nth-child(1) tr td:nth-child(4) a:contains('The Lounge')").not("em").length;
	$("strong:contains('Search Results')").after("<span class='smalltext' style='float: right;'><span id='posts_today'>"+nb_posts+"</span> Lounge Posts on this Page</span>");

	if (nb_posts > 19) {
		$("#posts_today").html("...");
		$.get(document.URL + "&sortby=dateline&order=desc&uid=&page=2", function(data) {
			nb_posts = nb_posts + $(data).find(".tborder tbody:nth-child(1) tr td:nth-child(7) span.smalltext:contains('hours ago')").length;
			$("#posts_today").html(nb_posts);
		});
	}
}