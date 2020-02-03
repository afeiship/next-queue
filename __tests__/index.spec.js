(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxQueue = require('../src/next-queue');

  describe('NxQueue.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
