/**
 * @packagedocumentation
 */
import ApplicationInstance from "@ember/application/instance";
import { setupRenderingTest, setupApplicationTest } from "ember-qunit";
import { setupTest } from 'ember-qunit';

abstract class BaseEmberTest {
  protected owner!: ApplicationInstance;
  protected set!: (key: string, value: any) => void;
  protected get!: (key: string) => any;
  protected setProperties!: (toSet: { [key: string]: any }) => void;
  protected getProperties!: (...args: any[]) => any[];
}

/**
 * A test module that requires rendering (i.e., a component integration test)
 * @param E - Root element type
 * @public
 */
export abstract class EmberRenderingTest<
  E extends HTMLElement = HTMLElement
> extends BaseEmberTest {
  /**
   * Boundary element wrapping the rendered content
   */
  protected element!: E;
  constructor(
    hooks: NestedHooks,
    options: { skipSetup: boolean } = { skipSetup: false }
  ) {
    super();
    if (!options.skipSetup) {
      setupRenderingTest(hooks);
    }
  }
}

/**
 * A test module that requires booting the application (i.e., an acceptance test)
 *
 * @public
 */
export abstract class EmberApplicationTest extends BaseEmberTest {
  constructor(
    hooks: NestedHooks,
    options: { skipSetup: boolean } = { skipSetup: false }
  ) {
    super();
    if (!options.skipSetup) {
      setupApplicationTest(hooks);
    }
  }
}

/**
 * A basic test (i.e., a unit test)
 *
 * @public
 */
export abstract class EmberTest extends BaseEmberTest {
  constructor(
    hooks: NestedHooks,
    options: { skipSetup: boolean } = { skipSetup: false }
  ) {
    super();
    if (!options.skipSetup) {
      setupTest(hooks);
    }
  }
}
