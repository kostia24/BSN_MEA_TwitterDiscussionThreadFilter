var showTwitter = true;
var showUsers = true;
var showLinks = true;
var showEmbeddedYoutube = true;
var includeImages = false;

var savedMsgIndexes = [];
var opt = {};

var msgCopy = $(".message").clone(); // copy all messages
msgCopy.children(".quote").remove(); // remove all qoutes from copied posts

msgCopy.each(function (i, e) {
	var twitterPatern = /( @+)|( ‏@+)|twitterwidget/m; // pattern for post with @ character and and embedded twitter
	var userUrlPatern = /href="\/user\//m;
	var youtubePatern = /<iframe/m; // iframe use for embedded youtube
	var hrefPattern = "";

	if (includeImages)
		hrefPattern = /href="http(.*?)"/m; // external link 
	else
		hrefPattern = /href="http(.(?!(\.png|\.jpg|\.jpeg|\.gif)))*"/m; // external link without images

	var hasTwitter = twitterPatern.test(e.innerHTML);
	var hasUserUrl = userUrlPatern.test(e.innerHTML);
	var hasHref = hrefPattern.test(e.innerHTML);
	var hasYoutube = youtubePatern.test(e.innerHTML);

	var shouldRemove = true;

	if (showTwitter && hasTwitter )
		shouldRemove = false;

	if (showUsers && hasUserUrl)
		shouldRemove = false;
	
	if (showLinks && hasHref)
		shouldRemove = false;

	if (showEmbeddedYoutube && hasYoutube)
		shouldRemove = false;

	if (shouldRemove)
		$(e).remove(); 
	else
		savedMsgIndexes.push(i); // remember post id

});

var msg = $(".message");
msg.each(function (i, e) {
	if (savedMsgIndexes.indexOf(i) == -1)
		$(e).parents("tr").remove(); // remove original post block
})