const { self, data } = require('sdk/self');
const pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("cyber_to_butt.js"),
});

