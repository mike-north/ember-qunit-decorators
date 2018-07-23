import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('Unit | Controller | home')
export class HomeControllerTest extends EmberTest {
  // Replace this with your real tests.
  @test('it exists')
  itExists(assert: Assert) {
    let controller = this.owner.lookup('controller:home');
    assert.ok(controller);
  }
}
