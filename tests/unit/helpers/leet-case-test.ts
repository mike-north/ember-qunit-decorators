import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';
import { leetCase } from 'dummy/helpers/leet-case';

@suite('Unit | Helper | leet-case')
export class LeetCaseHelperTest extends EmberTest {
  // Replace this with your real tests.
  @test('it works')
  itWorks(assert: Assert) {
    let result = leetCase(['42']);
    assert.ok(result);
  }
}
