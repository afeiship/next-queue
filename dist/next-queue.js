/*!
 * name: @feizheng/next-queue
 * description: Queue for next.
 * url: https://github.com/afeiship/next-queue
 * version: 1.0.0
 * date: 2020-02-03 20:29:18
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxQueue = nx.declare('nx.Queue', {
    methods: {
      init: function(inData) {
        this.data = inData;
      },
      enqueue: function() {
        return this.data.push.apply(this.data, arguments);
      },
      dequeue: function() {
        return this.data.shift();
      },
      front: function() {
        return this.data[0];
      },
      isEmpty: function() {
        return this.data.length === 0;
      },
      size: function() {
        return this.data.length;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxQueue;
  }
})();

//# sourceMappingURL=next-queue.js.map
