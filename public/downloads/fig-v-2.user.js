// ==UserScript==
// @name           F.I.G.S.
// @namespace      dan@danfinnie.com
// @include        http://*facebook.com*
// ==/UserScript==

millis = (new Date()).getTime();

findGroups = function()
{
  var url = "http://" + unsafeWindow.location.hostname + "/groups.php?id=1329091066";
  GM_xmlhttpRequest({'url': url, 'method': 'GET','onload': function(responseDetails)
    {
      var html = responseDetails.responseText;
      matches = html.match(/<a href="group.php\?gid=(\d+)">([^<]+)/g);
      GM_setValue("numGroups", matches.length - 1);
      for (var i = 0; i < matches.length; i++)
      {
        match = matches[i].match(/<a href="group.php\?gid=(\d+)">([^<]+)/);
        GM_setValue("group" + i + "name", match[2]);
        GM_setValue("group" + i + "gid", match[1]);
      }
    }
  });
  GM_setValue("last_update", millis + "");
  GM_log("Searched for updates to groups.");
}

GM_registerMenuCommand("Re-scan Groups", findGroups);

if (parseInt(GM_getValue("last_update", 0)) + 24*60*60*100 < millis)
  findGroups();

unsafeWindow.numGroups = parseInt(GM_getValue("numGroups"));

unsafeWindow.search_friend_source.prototype.search_value = function(text)
  {
    if (text.length >= 2)
    {
      var values = this.parent.search_value(text);
      
      for (var i = 0; i < unsafeWindow.numGroups; i++)
      {
         var name = unescape(GM_getValue("group" + i + "name"));
         var ta = document.createElement("textarea");
         ta.innerHTML = name.replace(/</g,"&lt;").replace(/>/g,"&gt;");
         name = ta.value;
         if (name.match(new RegExp("\\W" + text + "|^" + text, "i")))
         {
           var obj = new Object;
           obj.t = name;
           obj.u = "group.php?gid=" + GM_getValue("group" + i + "gid");
           obj.n = "Group";
           values.push(obj);
         }
       }
      
      this.owner.less_than_n_chars = false;
      return values;
    }
    else if (this.is_ready)
    {
      this.owner.less_than_n_chars = true;
      return[];
    }
  }
