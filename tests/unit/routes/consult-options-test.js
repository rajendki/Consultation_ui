import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | consult_options', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:consult-options');
    assert.ok(route);
  });
});
