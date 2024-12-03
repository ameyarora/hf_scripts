// ==UserScript==
// @name         Online List Popularity Button
// @version      1.0.1
// @description  Add popularity buttons to the online users list.
// @author       Amey Arora
// @include      https://hackforums.net/online.php?action=list&sort=group
// @updateURL    https://github.com/ameyarora/hf_scripts/raw/master/OnlinePage_Reputation.user.js
// @downloadURL  https://github.com/ameyarora/hf_scripts/raw/master/OnlinePage_Reputation.user.js
// @iconURL      https://raw.githubusercontent.com/ameyarora/hf_scripts/master/icon.png
// @require      https://github.com/ameyarora/hf_scripts/raw/refs/heads/master/Lib/GM_SUPER.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

var onlinePopBtn = {
    config: GM_SuperValue.get('onlineListPopBtn', []),

    init: function () {
        onlinePopBtn.addBtn();
    },

    addBtn: function () {
        document.querySelectorAll(`#content > div > table > tbody > tr > td > span > a`).forEach(function (element) {
            var uid = element.href.split(`action=profile&uid=`)[1];

            if (!onlinePopBtn.config[uid]) {
                element.insertAdjacentHTML('beforeend', (`<a href="javascript:MyBB.reputation(${uid});" id="userscript-online-pop-btn-${uid}" onclick="" data-tooltip="Rate User" style="margin-left: 3px; color: rgb(76, 175, 80);"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>`));

                document.getElementById(`userscript-online-pop-btn-${uid}`).addEventListener("click", function () { onlinePopBtn.btnCallback(uid) });
            }
            else {
                element.remove();
            }
        });
    },

    btnCallback: function (uid) {
        console.log(`Adding ${uid} to popularity given list.`);

        onlinePopBtn.config[uid] = uid;

        GM_SuperValue.set('onlineListPopBtn', onlinePopBtn.config);
    }

}

onlinePopBtn.init();
