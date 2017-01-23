## Introduction
This script allows to hide all discussion messages on [BSN The Mass Effect Andromeda Twitter Discussion Thread] page and leave only twitter, embedded YouTube, external links and images (all configurable).

## How to use
### First way
* Create a bookmark. 
* In address field enter **javascript:** and script. So it would be like this:
```js
javascript: var showTwitter=true,showUsers=true,showLinks=true,showEmbeddedYoutube=true,includeImages=false;function removePosts(e,s,t,r,n){var o=[],i=$(".message").clone();i.children(".quote").remove(),i.each(function(i,h){var m=/( @+)|( ‏@+)|twitterwidget/m,a=/href="\/user\//m,u=/<iframe/m,w="";w=n?/href="http(.*?)"/m:/href="http(.(?!(\.png|\.jpg|\.jpeg|\.gif)))*"/m;var d=m.test(h.innerHTML),v=a.test(h.innerHTML),c=w.test(h.innerHTML),f=u.test(h.innerHTML),g=!0;e&&d&&(g=!1),s&&v&&(g=!1),t&&c&&(g=!1),r&&f&&(g=!1),g?$(h).remove():o.push(i)});var h=$(".message");h.each(function(e,s){-1==o.indexOf(e)&&$(s).parents("tr").remove()})} removePosts(showTwitter,showUsers,showLinks,showEmbeddedYoutube,includeImages);
```
And just open it when you are located on this thread.

### Second way
* Open Browser Developer Console (in Chrome and IE press F12 key)
* Paste script
```js
var showTwitter=true,showUsers=true,showLinks=true,showEmbeddedYoutube=true,includeImages=false;function removePosts(e,s,t,r,n){var o=[],i=$(".message").clone();i.children(".quote").remove(),i.each(function(i,h){var m=/( @+)|( ‏@+)|twitterwidget/m,a=/href="\/user\//m,u=/<iframe/m,w="";w=n?/href="http(.*?)"/m:/href="http(.(?!(\.png|\.jpg|\.jpeg|\.gif)))*"/m;var d=m.test(h.innerHTML),v=a.test(h.innerHTML),c=w.test(h.innerHTML),f=u.test(h.innerHTML),g=!0;e&&d&&(g=!1),s&&v&&(g=!1),t&&c&&(g=!1),r&&f&&(g=!1),g?$(h).remove():o.push(i)});var h=$(".message");h.each(function(e,s){-1==o.indexOf(e)&&$(s).parents("tr").remove()})} removePosts(showTwitter,showUsers,showLinks,showEmbeddedYoutube,includeImages);
```
* Press Enter

On next page you can just run command
```sh
removePosts(showTwitter, showUsers, showLinks, showEmbeddedYoutube, includeImages);
```
or all script again.


Also there are many extensions for your browser that allow execute script.

## Options

You can specify which content you want to see. In script set **true** or **1** to enable option and **false** or **0** to disable. 

Show post with twitter messages. Basically show all messages that contains @ character (excluding emails) and embedded twitters.
```
showTwitter = true 
``` 

Some twitter names with @ sign forum convert to link on user account, so I recommend set it same as previous option.
```
showUsers = true 
```

Include all messages with external links for example http://masseffect.com
```
showLinks = true 
```
Include images from external resources. Users use images mostly for discussion so I left it false by default.
```
includeImages = false
```
Show embedded YouTube video. 
```
showEmbeddedYoutube = true
```


**To reset all changes just reload page.**

[BSN The Mass Effect Andromeda Twitter Discussion Thread]: <http://bsn.boards.net/thread/26/effect-andromeda-twitter-discussion-thread>
