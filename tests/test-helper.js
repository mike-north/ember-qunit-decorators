import { application } from "./helpers/resolver";
import { setApplication } from "@ember/test-helpers";
import { start } from "ember-qunit";

setApplication(application);

start();
