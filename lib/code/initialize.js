"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _setEachStyle = _interopRequireDefault(require("./setEachStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _default(style) {
  if (_typeof(style) !== 'object') {
    console.error({
      err: 'In set style function: style is not an object or an array of objects',
      style: style
    });
    return;
  }

  style.group = style.group || 'default';
  style.overwrite = style.overwrite || false;
  (0, _setEachStyle.default)(style);
}