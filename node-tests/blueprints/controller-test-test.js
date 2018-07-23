'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy controller-test', function() {
  setupTestHooks(this);

  it('controller-test foo (JS)', function() {
    let args = ['controller-test', 'flavors', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/controllers/flavors-test.js');
        expect(f)
          .to.contain('qunit-decorators\'')
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain("this.owner.lookup('controller:flavors')")
          .to.contain('ember-qunit-decorators')
          ;
    }));
  });
  it('controller-test foo (TS)', function() {
    let args = ['controller-test', 'flavors', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/controllers/flavors-test.ts');
        expect(f)
          .to.contain('qunit-decorators\'')
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain('assert: Assert')
          .to.contain("this.owner.lookup('controller:flavors')")
          .to.contain('ember-qunit-decorators')
          ;
    }));
  });
});
