import { suite, test } from 'qunit-decorators';
import { EmberRenderingTest } from 'ember-qunit-decorators/test-support';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

@suite('Integration | Helper | leet-case')
export class LeetCaseHelperTest extends EmberRenderingTest {
  // Replace this with your real tests.
  @test('it renders')
  async itRenders(assert: Assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{leet-case inputValue}}`);

    assert.equal(('' + this.element.textContent).trim(), '1234');
  }
}