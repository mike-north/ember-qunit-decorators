import { EmberTest } from 'ember-qunit-decorators/test-support';
import { suite, test } from 'qunit-decorators';

@suite('SimpleTest')
export class SimpleTest extends EmberTest {
  constructor(hooks: NestedHooks, options: { skipSetup: boolean }) {
    super(hooks, options);
    this.myFunction(); // works fine
  }

  public myFunction() {
    return true;
  }

  @test
  public testOne(_assert: Assert) {
    this.myFunction(); // TypeError
  }
}
