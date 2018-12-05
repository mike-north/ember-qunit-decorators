import { suite, test } from 'qunit-decorators';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { EmberRenderingTest } from 'ember-qunit-decorators/test-support';

@suite('Integration | Component | x-foo')
export class XFooTests extends EmberRenderingTest {
  foo() {
    return 'ok';
  }

  @test('it renders')
  async itRenders(assert: Assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{x-foo}}`);

    assert.equal(('' + this.element.textContent).trim(), '');

    // Template block usage:
    await render(hbs`
      {{#x-foo}}
        template block text
      {{/x-foo}}
    `);

    assert.equal(this.foo(), 'ok');

    assert.equal(('' + this.element.textContent).trim(), 'template block text');
  }
}
