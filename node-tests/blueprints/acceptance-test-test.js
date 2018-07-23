'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy acceptance-test', function() {
  setupTestHooks(this);

  it('acceptance-test contact-us', function() {
    let args = ['acceptance-test', 'contact-us'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/acceptance/contact-us-test.js')).to.contain('contact-us');
    }));
  });
});
