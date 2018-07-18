#!/usr/bin/env osascript -l JavaScript

var cidr = "10.10.10."
var productionPluginBoxes = [
    "201", "202", "205", "207", "208", "209", "210", "211", "212", "213", "214", "215"
]

iTerm = Application('iTerm')
iTerm.activate()


if (iTerm.currentWindow() == null) {
    console.log("creating window")
    iTerm.createWindowWithProfile("Default")
}

for (var i = 0; i < productionPluginBoxes.length - 1; i++) {
    iTerm.currentWindow.createTabWithDefaultProfile();
}

for (var i = 0; i < productionPluginBoxes.length; i++) {
    iTerm.currentWindow.tabs[i].currentSession().write({text:"ssh " + cidr + productionPluginBoxes[i]})
}
