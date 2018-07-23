'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy instance-initializer-test', function() {
  setupTestHooks(this);

  it('instance-initializer-test analytics (JS)', function() {
    let args = ['instance-initializer-test', 'analytics', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/instance-initializers/analytics-test.js');
        expect(f).to.contain("import { initialize } from 'my-app/instance-initializers/analytics';")
                  .contain('extends EmberTest')
                  .contain('this.application.buildInstance()')
                  .contain('Application.create')
                  .contain('(assert)')
                  ;
        expect(f).to.not.contain('assert: Assert');
    }));
  });
  it('instance-initializer-test analytics (TS)', function() {
    let args = ['instance-initializer-test', 'analytics', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/instance-initializers/analytics-test.ts');
        expect(f).to.contain("import { initialize } from 'my-app/instance-initializers/analytics';")
                  .contain('extends EmberTest')
                  .contain('this.application.buildInstance()')
                  .contain('Application.create')
                  .contain('assert: Assert')
                  ;
        expect(f).to.not.contain('(assert)');
    }));
  });
});
