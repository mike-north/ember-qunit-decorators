"use strict";

const blueprintHelpers = require("ember-cli-blueprint-test-helpers/helpers");
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require("ember-cli-blueprint-test-helpers/chai").expect;

describe("Acceptance: ember generate and destroy route-test", function() {
  setupTestHooks(this);

  it("route-test foo (JS)", function() {
    let args = ["route-test", "glossary", "--inJs"];

    // pass any additional command line options in the arguments array
    return emberNew().then(() =>
      emberGenerateDestroy(args, file => {
        const f = file("tests/unit/routes/glossary-test.js");
        expect(f)
          .to.contain("(assert)")
          .contain("this.owner.lookup('route:glossary')")
          .contain("class GlossaryRouteTest extends EmberTest {")
          .contain("import { suite, test } from 'qunit-decorators'")
          .contain("@suite")
          .contain("@test");

        expect(f).not.to.contain("(assert: Assert)");
      })
    );
  });
  it("route-test foo (TS)", function() {
    let args = ["route-test", "glossary", "--inTs"];

    // pass any additional command line options in the arguments array
    return emberNew().then(() =>
      emberGenerateDestroy(args, file => {
        const f = file("tests/unit/routes/glossary-test.ts");
        expect(f)
          .to.contain("(assert: Assert)")
          .contain("this.owner.lookup('route:glossary')")
          .contain("class GlossaryRouteTest extends EmberTest {")
          .contain("import { suite, test } from 'qunit-decorators'")
          .contain("@suite")
          .contain("@test");

        expect(f).not.to.contain("(assert)");
      })
    );
  });
});
