import { suite, test } from 'qunit-decorators';
import { visit, currentURL } from '@ember/test-helpers';
import { EmberApplicationTest } from 'ember-qunit-decorators/test-support';

@suite('Acceptance | index')
export class IndexAcceptanceTest extends EmberApplicationTest {

  @test('visiting / ')
  async doVisit(assert: Assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  }
}
