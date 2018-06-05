"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var styleGroups = {};

function _default() {
  var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var callback = arguments.length > 1 ? arguments[1] : undefined;

  if (!styleGroups.hasOwnProperty(group)) {
    styleGroups[group] = document.createElement('style');
    document.head.appendChild(styleGroups[group]);
  }

  callback(styleGroups[group].sheet);
}