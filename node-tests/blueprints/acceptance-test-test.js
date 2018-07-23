'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy acceptance-test', function() {
  setupTestHooks(this);

  it('acceptance-test contact-us (JS)', function() {
    let args = ['acceptance-test', 'contact-us', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/acceptance/contact-us-test.js');
        expect(f)
          .to.contain('visit')
          .to.contain('/contact-us')
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain("'qunit-decorators'")
          .to.contain("'ember-qunit-decorators/test-support'");
    }));
  });
  it('acceptance-test contact-us (TS)', function() {
    let args = ['acceptance-test', 'contact-us', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/acceptance/contact-us-test.ts');
        expect(f)
          .to.contain('visit')
          .to.contain('/contact-us')
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain("'qunit-decorators'")
          .to.contain("'ember-qunit-decorators/test-support'")
          .to.contain("assert: Assert");
    }));
  });
});
