import { suite, test } from 'qunit-decorators';
import { visit, currentURL } from '@ember/test-helpers';
import { EmberApplicationTest } from 'ember-qunit-decorators/test-support';

@suite('Acceptance | home')
export class HomeAcceptanceTest extends EmberApplicationTest {

  @test('visiting /home')
  async visitPage(assert: Assert) {
    await visit('/home');
    assert.equal(currentURL(), '/home');
  }
}
