(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxQueue = nx.declare('nx.Queue', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxQueue;
  }
})();
