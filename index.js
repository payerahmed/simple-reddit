(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.simpleReddit = factory());
}(this, (function () { 'use strict';

var simpleReddit = {
  hot: function hot(subreddit) {
    return this.listing({
      subreddit: subreddit,
      resource: 'hot'
    });
  }
};

return simpleReddit;

})));
