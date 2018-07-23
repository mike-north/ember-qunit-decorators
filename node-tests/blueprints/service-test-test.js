'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy service-test', function() {
  setupTestHooks(this);

  it('service-test attendance (JS)', function() {
    let args = ['service-test', 'attendance', '--inJs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/services/attendance-test.js');
        expect(f).to.contain('(assert)')
          .contain("this.owner.lookup('service:attendance')")
          .contain('class AttendanceServiceTest extends EmberTest {')
          .contain('@suite')
          .contain('@test')
          .contain('qunit-decorators');
        expect(f).to.not.contain('(assert: Assert)');
    }));
  });
  it('service-test attendance (TS)', function() {
    let args = ['service-test', 'attendance', '--inTs'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        const f = file('tests/unit/services/attendance-test.ts');
        expect(f).to.contain('(assert: Assert)')
          .contain("this.owner.lookup('service:attendance')")
          .contain('class AttendanceServiceTest extends EmberTest {')
          .contain('@suite')
          .contain('@test')
          .contain('qunit-decorators');
        expect(f).to.not.contain('(assert)');
    }));
  });
});
