/*!
 * name: @jswork/next-queue
 * description: Queue for next.
 * homepage: https://github.com/afeiship/next-queue
 * version: 1.0.0
 * date: 2020-11-22 17:19:52
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxQueue = nx.declare('nx.Queue', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxQueue;
  }
})();
