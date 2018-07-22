import { suite, test } from "qunit-decorators";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { EmberRenderingTest } from "ember-qunit-decorators/test-support";

@suite("Integration | Helper | capitalize")
export class CapitalizeHelperTest extends EmberRenderingTest {

  @test("it renders")
  async itWorks(assert: Assert) {
    this.set("inputValue", "hello");

    await render(hbs`{{capitalize inputValue}}`);

    assert.equal(('' + this.element.textContent).trim(), "Hello");
  }
}
