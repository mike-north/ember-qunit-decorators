'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy component-test', function() {
  setupTestHooks(this);

  it('component-test user-profile (integration) (JS)', function() {
    let args = ['component-test', 'user-profile', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/integration/components/user-profile-test.js');
        expect(f)
          .to.contain('{{user-profile}}')
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain('await render')
          .to.contain('{{#user-profile}}');
    }));
  });
  it('component-test user-profile (integration) (TS)', function() {
    let args = ['component-test', 'user-profile', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/integration/components/user-profile-test.ts');
        expect(f)
          .to.contain('{{user-profile}}')
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain('assert: Assert')
          .to.contain('await render')
          .to.contain('{{#user-profile}}');
    }));
  });
  it('component-test user-profile (unit) (JS)', function() {
    let args = ['component-test', 'user-profile', '--unit', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/components/user-profile-test.js');
        expect(f)
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain('(assert)')
          .to.contain('this.owner.factoryFor')
          ;
    }));
  });
  it('component-test user-profile (unit) (TS)', function() {
    let args = ['component-test', 'user-profile', '--unit', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/components/user-profile-test.ts');
        expect(f)
          .to.contain('@suite')
          .to.contain('@test')
          .to.contain('assert: Assert')
          .to.contain('this.owner.factoryFor')
          ;
    }));
  });
});
