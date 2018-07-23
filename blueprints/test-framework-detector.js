/* eslint-env node */
"use strict";

const fs = require("fs");
const path = require("path");
const VersionChecker = require("ember-cli-version-checker");
const { makeTestClassName } = require("./utils");

/*
availableOptions: [
    {
      name: 'test-type',
      type: ['integration', 'unit'],
      default: 'integration',
      aliases: [
        { i: 'integration' },
        { u: 'unit' },
        { integration: 'integration' },
        { unit: 'unit' },
      ],
    },
  ],
  */

module.exports = function(blueprint) {
  blueprint.supportsAddon = function() {
    return false;
  };
  // availableOptions
  const originalAvailableOptions = blueprint.availableOptions;
  blueprint.availableOptions = (originalAvailableOptions || []).concat({
    name: "script-type",
    type: ["js", "ts", "auto"],
    aliases: [{ inJs: 'js'}, { inTs: 'ts' }],
    default: "auto"
  });

  // fileMapTokens
  const originalFileMapTokens = blueprint.fileMapTokens;
  blueprint.fileMapTokens = function() {
    let superTokens = originalFileMapTokens
      ? originalFileMapTokens.call(this)
      : {};
    return Object.assign(
      {
        __ext__: function(options) {
          return options.locals.lang;
        }
      },
      superTokens
    );
  };
  // locals
  const originalLocals = blueprint.locals;
  blueprint.locals = function(options) {
    let dependencies = this.project.dependencies();
    let superLocals = originalLocals ? originalLocals.call(this, options) : {};
    let lang =
      ["js", "ts"].indexOf(options.scriptType) >= 0
        ? options.scriptType
        : "ember-cli-typescript" in dependencies
          ? "ts"
          : "js";
    let testClassName = makeTestClassName(options.entity);

    return Object.assign(
      {
        lang,
        testClassName,
        isTyped: lang === "ts"
      },
      superLocals
    );
  };

  blueprint.filesPath = function() {
    let type;

    let dependencies = this.project.dependencies();
    if ("ember-qunit" in dependencies) {
      type = "qunit-rfc-232";
    } else if ("ember-cli-qunit" in dependencies) {
      let checker = new VersionChecker(this.project);
      if (
        fs.existsSync(this.path + "/qunit-rfc-232-files") &&
        checker.for("ember-cli-qunit", "npm").gte("4.2.0")
      ) {
        type = "qunit-rfc-232";
      } else {
        type = "qunit";
      }
    } else if ("ember-mocha" in dependencies) {
      type = "mocha-0.12";
    } else if ("ember-cli-mocha" in dependencies) {
      let checker = new VersionChecker(this.project);
      if (
        fs.existsSync(this.path + "/mocha-0.12-files") &&
        checker.for("ember-cli-mocha", "npm").gte("0.12.0")
      ) {
        type = "mocha-0.12";
      } else {
        type = "mocha";
      }
    } else {
      this.ui.writeLine("Couldn't determine test style - using QUnit");
      type = "qunit";
    }

    return path.join(this.path, type + "-files");
  };

  return blueprint;
};
