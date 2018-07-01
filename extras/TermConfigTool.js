#!/usr/bin/env osascript -l JavaScript

function run(argv) {
  // Obtain the terminal application
  var terminal = Application('Terminal');

  // Enumerate all Profiles
  //console.log(terminal.settingsSets);

  // Grab the Pro profile
  proSettings = terminal.settingsSets.IW;

  // Set the font
  proSettings.fontName = 'DroidSansMono Nerd Font';
  proSettings.fontSize = 11;
  //proSettings.fontAntialiasing = true;

  // Set the background colour (with no opacity)
  //proSettings.backgroundColor = [0, 0, 0];

  // Set the window size
  proSettings.numberOfRows = 50;
  proSettings.numberOfColumns = 205;

  // Set the default profile to Pro
  terminal.defaultSettings = proSettings;
  terminal.startupSettings = proSettings;

  // Set the profile to Pro for all open windows and tabs
  for (var window of terminal.windows()) {
    for (var tab of window.tabs()) {
      tab.currentSettings = proSettings;
    }
  }
}
