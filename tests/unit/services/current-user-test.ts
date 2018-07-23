import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('Unit | Service | current-user')
export class CurrentUserServiceTest extends EmberTest {
  // Replace this with your real tests.
  @test('it exists')
  itExists(assert: Assert) {
    let service = this.owner.lookup('service:current-user');
    assert.ok(service);
  }
}
