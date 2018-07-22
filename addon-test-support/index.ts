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

export abstract class EmberRenderingTest<
  E extends HTMLElement = HTMLElement
> extends BaseEmberTest {
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