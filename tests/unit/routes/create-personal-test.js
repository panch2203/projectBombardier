import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | create-personal', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create-personal');
    assert.ok(route);
  });
});
