'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy util-test', function() {
  setupTestHooks(this);

  it('util-test nice-number (JS)', function() {
    let args = ['util-test', 'nice-number', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/utils/nice-number-test.js');
        expect(f).to
          .contain('export class NiceNumberTest {')
          .contain("import { suite, test } from 'qunit-decorators'")
          .contain("@suite")
          .contain("@test")
          .contain("(assert)")
          .contain("import niceNumber from 'my-app/utils/nice-number'");
        expect(f).to.not.contain("(assert: Assert)")
    }));
  });
  it('util-test nice-number (TS)', function() {
    let args = ['util-test', 'nice-number', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/utils/nice-number-test.js');
        expect(f).to
          .contain('export class NiceNumberTest {')
          .contain("import { suite, test } from 'qunit-decorators'")
          .contain("@suite")
          .contain("@test")
          .contain("(assert)")
          .contain("import niceNumber from 'my-app/utils/nice-number'");
        expect(f).to.not.contain("(assert: Assert)")
    }));
  });
});
