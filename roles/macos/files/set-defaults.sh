#!/bin/sh

# set reasonable macOS defaults
# insipired by : https://github.com/mathiasbynens/dotfiles
# more can be found here : https://gist.github.com/brandonb927/3195465

if [ "$(uname - s)" != "Darwin" ]; then
	exit 0
fi

set +e

echo "  › show path bar"
defaults write com.apple.finder ShowPathbar -bool true
