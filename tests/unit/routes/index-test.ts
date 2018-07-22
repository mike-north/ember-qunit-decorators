import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('Unit | Route | index')
export class IndexRouteTest extends EmberTest {

  @test('it exists')
  itWorksTest(assert: Assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  }
}
