import hotToCold from 'dummy/utils/hot-to-cold';
import { suite, test } from 'qunit-decorators';

@suite('Unit | Utility | hot-to-cold')
export class HotToColdTest {
  // Replace this with your real tests.
  @test('it works')
  itWorks(assert: Assert) {
    let result = hotToCold();
    assert.ok(result);
  }
}
