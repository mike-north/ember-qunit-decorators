import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('Unit | Component | bar-baz')
export class BarBaz extends EmberTest {

  @test('it exists')
  itExists(assert: Assert) {
    let component = this.owner.factoryFor('component:bar-baz').create();
    assert.ok(component);
  }
}
