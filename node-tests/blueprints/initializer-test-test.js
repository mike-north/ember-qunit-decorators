'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy initializer-test', function() {
  setupTestHooks(this);

  it('initializer-test foo (JS)', function() {
    let args = ['initializer-test', 'geolocation', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/initializers/geolocation-test.js');
        expect(f)
          .to.contain('geolocation')
          .and.contain('@suite')
          .and.contain('@test')
          .and.contain('Application.initializer')
          .and.contain('@test')
          .and.contain('EmberTest')
          .and.contain('(assert)')
          .not.contain('assert: Assert')
          ;
    }));
  });
  it('initializer-test foo (TS)', function() {
    let args = ['initializer-test', 'geolocation', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/initializers/geolocation-test.ts');
        expect(f)
          .to.contain('geolocation')
          .and.contain('@suite')
          .and.contain('@test')
          .and.contain('Application.initializer')
          .and.contain('@test')
          .and.contain('EmberTest')
          .and.contain('assert: Assert')
          .not.contain('(assert)')
          ;
    }));
  });
});
