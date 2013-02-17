---
layout: post
title: Hidden OS X Files
---

{{ page.title }}
----------------
Every now and then I need to view hidden files in OS X, primarily .htaccess for
website stuff, which Lion hides from view by default. Rather than dig through
Google every time I need to figure out how to hide/unhide my files, I'm just
gonna stick the procedure here. Fire up terminal and paste in the following
command:

    defaults write com.apple.finder AppleShowAllFiles -bool true

That will make all files viewable. But we need to restart Finder for the change
to take effect. Do so by pasting the following command:

    killall Finder

Now you can see all the dirty, dirty files that OS X doesn't want you to see.
To hide the hidden files, just run the following command:

    defaults write com.apple.finder AppleShowAllFiles -bool false

Then all the hidden files will be tucked away again when you restart Finder by
invoking the following command:

    killall Finder
