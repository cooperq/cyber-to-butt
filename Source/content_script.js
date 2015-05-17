walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bcyberspace\b/gi, "my butt");
	v = v.replace(/\bcyber-space\b/gi, "my butt");
	v = v.replace(/\bcyber space\b/gi, "my butt");
	v = v.replace(/\bcybercrime\b/gi, "butt crimes");
	v = v.replace(/\bcyber-crime\b/gi, "butt crimes");
	v = v.replace(/\bcyber crime\b/gi, "butt crimes");
	v = v.replace(/\bcybercriminals\b/gi, "Butt-pirates");
	v = v.replace(/\bcyber-criminals\b/gi, "Butt-pirates");
	v = v.replace(/\bcyber criminals\b/gi, "butt pirates");
	v = v.replace(/\bcyber expert\b/gi, "proctologist");
	v = v.replace(/\bcyberwar\b/gi, "farting");
	v = v.replace(/\bcyber-war\b/gi, "farting");
	v = v.replace(/\bcyber war\b/gi, "farting");
	v = v.replace(/\bcyberwarfare\b/gi, "farting");
	v = v.replace(/\bcyber-warfare\b/gi, "farting");
	v = v.replace(/\bcyber warfare\b/gi, "farting");
	v = v.replace(/\bcyber 9\/11\b/gi, "terrorist velociraptors with frickin' laser-beams on their heads");
	v = v.replace(/cyber/gi, "butt");
	
	textNode.nodeValue = v;
}


