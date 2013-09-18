/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright 2013, Gilson Roca Silva
 */

/**
 * Constructor
 */
function FileOpen() {
};

FileOpen.prototype.open = function(url) {
    cordova.exec(null, null, "FileOpen", "openFile", [url]);
};

/**
 * Load Plugin
 */

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.fileOpen) {
    window.plugins.fileOpen = new FileOpen();
}
