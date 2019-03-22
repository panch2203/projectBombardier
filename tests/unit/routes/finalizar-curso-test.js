import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | finalizar-curso', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:finalizar-curso');
    assert.ok(route);
  });
});
