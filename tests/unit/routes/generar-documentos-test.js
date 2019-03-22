import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | generar-documentos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:generar-documentos');
    assert.ok(route);
  });
});
