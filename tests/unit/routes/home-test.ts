import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('Unit | Route | home')
export class HomeRouteTest extends EmberTest {

  @test('it exists')
  itExists(assert: Assert) {
    let route = this.owner.lookup('route:home');
    assert.ok(route);
  }
}
