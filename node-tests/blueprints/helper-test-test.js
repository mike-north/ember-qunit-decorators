"use strict";

const blueprintHelpers = require("ember-cli-blueprint-test-helpers/helpers");
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require("ember-cli-blueprint-test-helpers/chai").expect;

describe("Acceptance: ember generate and destroy helper-test", function() {
  setupTestHooks(this);

  it("helper-test foo (integration, JS)", function() {
    let args = ["helper-test", "has-role", "--inJs"];

    // pass any additional command line options in the arguments array
    return emberNew().then(() =>
      emberGenerateDestroy(args, file => {
        const f = file("tests/integration/helpers/has-role-test.js");
        expect(f)
          .to.contain("{{has-role")
          .to.contain("this.set")
          .to.contain("@suite")
          .to.contain("@test")
          .to.contain("qunit-decorators'")
          .to.contain("ember-qunit-decorators")
          .to.contain("EmberRenderingTest");
      })
    );
  });
  it("helper-test foo (integration, TS)", function() {
    let args = ["helper-test", "has-role", "--inTs"];

    // pass any additional command line options in the arguments array
    return emberNew().then(() =>
      emberGenerateDestroy(args, file => {
        const f = file("tests/integration/helpers/has-role-test.ts");
        expect(f)
          .to.contain("{{has-role")
          .to.contain("this.set")
          .to.contain("@suite")
          .to.contain("@test")
          .to.contain("qunit-decorators'")
          .to.contain("assert: Assert")
          .to.contain("ember-qunit-decorators")
          .to.contain("EmberRenderingTest");
      })
    );
  });
  it("helper-test foo (unit, JS)", function() {
    let args = ["helper-test", "has-role", "--unit", "--inJs"];

    // pass any additional command line options in the arguments array
    return emberNew().then(() =>
      emberGenerateDestroy(args, file => {
        const f = file("tests/unit/helpers/has-role-test.js");
        expect(f)
          .to.contain("hasRole(")
          .to.contain("@suite")
          .to.contain("@test")
          .to.contain("qunit-decorators'")
          .to.contain("ember-qunit-decorators")
          .to.contain("EmberTest")
          .not.to.contain("{{has-role")
          .to.contain("this.set")
          .to.contain("EmberRenderingTest");
      })
    );
  });
  it("helper-test foo (unit, TS)", function() {
    let args = ["helper-test", "has-role", "--unit", "--inTs"];

    // pass any additional command line options in the arguments array
    return emberNew().then(() =>
      emberGenerateDestroy(args, file => {
        const f = file("tests/unit/helpers/has-role-test.ts");
        expect(f)
          .to.contain("hasRole(")
          .to.contain("@suite")
          .to.contain("@test")
          .to.contain("qunit-decorators'")
          .to.contain("assert: Assert")
          .to.contain("ember-qunit-decorators")
          .to.contain("EmberTest")
          .not.to.contain("{{has-role")
          .to.contain("this.set")
          .to.contain("EmberRenderingTest");
      })
    );
  });
});
