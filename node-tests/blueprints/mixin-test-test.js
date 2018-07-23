'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy mixin-test', function() {
  setupTestHooks(this);

  it('mixin-test foo (JS)', function() {
    let args = ['mixin-test', 'sadness', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/mixins/sadness-test.js');
        expect(f).to
          .contain('SadnessObject')
          .contain('SadnessMixin')
          .contain('@suite')
          .contain('@test')
          .contain('Object.extend')
          .contain('class SadnessMixinTest {')
          .contain('qunit-decorators')
          .contain('(assert)');
        expect(f).to.not.contain('(assert: Assert)');
    }));
  });
  it('mixin-test foo (TS)', function() {
    let args = ['mixin-test', 'sadness', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/mixins/sadness-test.ts');
        expect(f).to
          .contain('SadnessObject')
          .contain('SadnessMixin')
          .contain('@suite')
          .contain('@test')
          .contain('Object.extend')
          .contain('class SadnessMixinTest {')
          .contain('qunit-decorators')
          .contain('(assert: Assert)');
        expect(f).to.not.contain('(assert)');
    }));
  });
});
