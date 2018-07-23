const stringUtils = require('ember-cli-string-utils');

/**
 * 
 * @param {{name: string}} entity 
 */
function makeTestClassName(entity) {
  return stringUtils.classify(entity.name);
}

module.exports = { makeTestClassName };