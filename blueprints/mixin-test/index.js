"use strict";
const stringUtils = require("ember-cli-string-utils");

const useTestFrameworkDetector = require("../test-framework-detector");

module.exports = useTestFrameworkDetector({
  description: "Generates a mixin unit test.",
  locals: function(options) {
    let projectName = options.inRepoAddon
      ? options.inRepoAddon
      : options.project.name();
    let dasherizedModulePrefix = options.inRepoAddon
      ? projectName
      : stringUtils.dasherize(options.project.config().modulePrefix);
    return {
      dasherizedModulePrefix,
      projectName,
      friendlyTestName: ["Unit", "Mixin", options.entity.name].join(" | ")
    };
  }
});
