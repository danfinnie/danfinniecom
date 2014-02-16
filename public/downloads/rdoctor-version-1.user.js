// ==UserScript==
// @name           RDoctor
// @namespace      dan@danfinnie.com
// @description    Makes RDoc more usable by filtering the Files, Classes, and Methods lists.
// @include        *
// ==/UserScript==

// See if this page is an RDoc page
var possible_names = /(file|class|method)_index\..{2,4}/;
if (possible_names.exec(window.location))
{
        // Return -1 if needle comes before haystack alphabetically, 0 if haystack starts with needle, and 1 if needle comes after haystack alphabetically.
	function match(haystack, needle)
	{
                var needle = needle.toLowerCase();
		var haystack = haystack.toLowerCase().substring(0, needle.length);
		
		if (needle == haystack)
			return 0;
		else if (needle < haystack)
			return -1;
		else
			return 1;
	}

	// Returns the index of a matching value in the given array.	
	function binarySearch(needle, haystack, min, max)
	{
		var guess = Math.round((min + max) / 2);
		var match_data = match(haystack[guess].innerHTML, needle);
		
		
		if (match_data == 0)
			return guess;
		else if (match_data == -1)
			return binarySearch(needle, haystack, min, guess - 1);
		else if (match_data == 1)
			return binarySearch(needle, haystack, guess + 1, max);
	}

	// Finds the upper and lower bounds of the answers.
	function findBoundaries(needle, haystack, mid)
	{
		var min = mid + 1;
		var max = mid - 1;
		var match_data = "I have now declared this variable.";

		do
		{
			min--;
			match_data = match(haystack[min-1].innerHTML, needle);
		} while (match_data == 0)

		do
		{
			max++;
			match_data = match(haystack[max+1].innerHTML, needle);
		} while (match_data == 0)

		return [min, max];
	}

	var div = document.createElement("div");
	div.innerHTML = "<input style=\"width: 100%;\"type=\"text\" id=\"search_box\" value=\"Type to filter...\" />";
	div.style.position = "fixed";
	div.style.bottom = "0em";
	div.style.width = "100%";
	var index = document.getElementById("index");
	index.appendChild(div);

	var zulu = function()
	{
		var search_text = document.getElementById("search_box").value;
		var links = document.getElementsByTagName("a");
		var brs = document.getElementsByTagName("br");

		var mid = binarySearch(search_text, links, 0, links.length);
		var boundaries = findBoundaries(search_text, links, mid);
		var min = boundaries[0];
		var max = boundaries[1];


		for (var i = 0; i < links.length; i++)
		{
			var link = links[i];
			var br = brs[i];
			if (min <= i && i <= max)
			{
				link.style.display = "inline";
				br.style.display = "inline";
			}
			else
			{
				link.style.display = "none";
				br.style.display = "none";
			}
		}
	}

	var bravo = function()
	{
		var search_box = document.getElementById("search_box");
		if(search_box.value == "Type to filter...")
			search_box.value = "";
	}

	var charlie = function()
	{
		var search_box = document.getElementById("search_box");
		if(search_box.value == "")
			search_box.value = "Type to filter...";
	}

	var search_box = document.getElementById("search_box");
	search_box.addEventListener("change", zulu, true);
	search_box.addEventListener("focus", bravo, true);
	search_box.addEventListener("blur", charlie, true);
}
