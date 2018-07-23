import { suite, test } from 'qunit-decorators';
import { EmberRenderingTest } from 'ember-qunit-decorators/test-support';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

@suite('Integration | Component | bar-baz')
export class BarBazComponentTest extends EmberRenderingTest {
  
  @test('it renders when used in {{inline-form}}')
  async testInline(assert: Assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bar-baz}}`);

    assert.equal(('' + this.element.textContent).trim(), '');
  }
  @test('it renders when used in {{#block-form}}  {{/block-form}}')

  async testBlock(assert: Assert) {
    // Template block usage:
    await render(hbs`
      {{#bar-baz}}
        template block text
      {{/bar-baz}}
    `);

    assert.equal(('' + this.element.textContent).trim(), 'template block text');
  }
}
