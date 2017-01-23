var showTwitter = true;
var showUsers = true;
var showLinks = true;
var showEmbededYoutube = true;
var includeImages = false;

var savedMsgIndexes = [];
var opt = {};

var msgCopy = $(".message").clone();
msgCopy.children(".quote").remove();

msgCopy.each(function (i, e) {
	var twitterPatern = /( @+)|( ‏@+)|twitterwidget/m;
	var userUrlPatern = /href="\/user\//m;
	var youtubePatern = /<iframe/m;
	var hrefPattern = "";

	if (includeImages)
		hrefPattern = /href="http(.*?)"/m;
	else
		hrefPattern = /href="http(.(?!(\.png|\.jpg|\.jpeg|\.gif)))*"/m;

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

	if (showEmbededYoutube && hasYoutube)
		shouldRemove = false;

	if (shouldRemove)
		$(e).remove();
	else
		savedMsgIndexes.push(i);

});

var msg = $(".message");
msg.each(function (i, e) {
	if (savedMsgIndexes.indexOf(i) == -1)
		$(e).parents("tr").remove();
})