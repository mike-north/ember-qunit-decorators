import { suite, test } from 'qunit-decorators';
<% if (testType === 'integration') { %>import { EmberRenderingTest } from 'ember-qunit-decorators/test-support';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

@suite('<%= friendlyTestDescription %>')
export class <%= testClassName %>ComponentTest extends EmberRenderingTest {
  
  @test('it renders when used in {{inline-form}}')
  async testInline(assert: Assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{<%= componentPathName %>}}`);

    assert.equal(('' + this.element.textContent).trim(), '');
  }
  @test('it renders when used in {{#block-form}}  {{/block-form}}')

  async testBlock(assert: Assert) {
    // Template block usage:
    await render(hbs`
      {{#<%= componentPathName %>}}
        template block text
      {{/<%= componentPathName %>}}
    `);

    assert.equal(('' + this.element.textContent).trim(), 'template block text');
  }
}
<% } else if (testType === 'unit') { %>import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('<%= friendlyTestDescription %>')
export class <%= testClassName %> extends EmberTest {

  @test('it exists')
  itExists(assert: Assert) {
    let component = this.owner.factoryFor('component:<%= componentPathName %>').create();
    assert.ok(component);
  }
}
<% } %>