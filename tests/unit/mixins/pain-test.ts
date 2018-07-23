import EmberObject from '@ember/object';
import PainMixin from 'dummy/mixins/pain';
import { suite, test } from 'qunit-decorators';

@suite('Unit | Mixin | pain')
export class PainMixinTest {
  // Replace this with your real tests.
  @test('it works')
  itExists(assert: Assert) {
    let PainObject = EmberObject.extend(PainMixin);
    let subject = PainObject.create();
    assert.ok(subject);
  }
}
