#! /usr/bin/env node

var shell = require("shelljs");

shell.exec("echo Deleting all .DS_Stores recursively...");
shell.exec("rm -rf **/.DS_Store");
shell.exec("echo Done!");