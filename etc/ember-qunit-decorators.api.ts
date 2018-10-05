// @public
class EmberApplicationTest extends BaseEmberTest {
  constructor(hooks: NestedHooks, options?: {
          skipSetup: boolean;
      });
}

// @public
class EmberRenderingTest<E extends HTMLElement = HTMLElement> extends BaseEmberTest {
  constructor(hooks: NestedHooks, options?: {
          skipSetup: boolean;
      });
  protected element: E;
}

// @public
class EmberTest extends BaseEmberTest {
  constructor(hooks: NestedHooks, options?: {
          skipSetup: boolean;
      });
}

// (No @packagedocumentation comment for this package)
