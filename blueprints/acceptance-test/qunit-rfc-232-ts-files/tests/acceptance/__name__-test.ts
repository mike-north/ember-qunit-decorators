import { suite, test } from 'qunit-decorators';
import { visit, currentURL } from '@ember/test-helpers';
import { EmberApplicationTest } from 'ember-qunit-decorators/test-support';

@suite('<%= friendlyTestName %>')
export class <%= testClassName %>AcceptanceTest extends EmberApplicationTest {

  @test('visiting /<%= dasherizedModuleName %>')
  async visitPage(assert: Assert) {
    await visit('/<%= dasherizedModuleName %>');
    assert.equal(currentURL(), '/<%= dasherizedModuleName %>');
  }
}
