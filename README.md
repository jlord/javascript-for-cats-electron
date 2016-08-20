# JavaScript for Cats on Electron

This is a fork of [@maxogden](https://github.com/maxogden)'s :cat2: [JS for Cats](http://github.com/maxogden/javascript-for-cats) :computer: project but with all the content in [Electron](http://electron.atom.io). It looks exactly the same :laughing:.

![screenshot of the app running](https://cloud.githubusercontent.com/assets/1305617/17824182/5a6e8fda-6615-11e6-9ebd-68015a62d89c.png)

## Why?

Because I realized it could be done really fast. And isn't it funny that the cool part of JS for Cats was using the browser to teach JavaScript and Electron is also like a browser and so your whole learn-dev environment can pop open :boom: even when you're on a :airplane: or :steam_locomotive: with no :signal_strength:.

:ok_woman: Do what I want!

## Download it

You can find the Mac, Windows and Linux versions for download over on the [release pages](https://github.com/jlord/javascript-for-cats-electron/releases) :pineapple: :cat:

## Build it

You'll need :computer: [Node.js](http://nodejs.org) installed on your computer and to run these commands in your terminal app:

```bash
# Clone this repository
$ git clone https://github.com/jlord/javascript-for-cats-electron
# Go into your fresh copy of this repository on your computer
$ cd javascript-for-cats-electron
# Install dependencies
$ npm install
# Start the app
$ npm start
```

## How?

If you're curious about the process: I cloned the original [JS for Cats](http://github.com/maxogden/javascript-for-cats) repository and moved the relevant files to a new folder named `javascript-for-cats-electron`. I brought over the directories `images`, `javascripts` and `stylesheets`.

I removed `javascripts/marked.js` because I'd just use that library as a node dependency.

I ran `git init` to make my new folder a Git repository and then ran `npm init` and created a `package.json` for the project. I added the dependencies I'd need: `electron` for running it locally, `marked` for generating the HTML, and `electron-packager` for packing it up to download on Mac, Windows and Linux.

I copied over `render.js` from the original and	
