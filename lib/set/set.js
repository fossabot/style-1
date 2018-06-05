"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = set;

var _setEachStyle = _interopRequireDefault(require("./setEachStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *
 * @param {IStyle | IStyle[]} style
 * @param {IStyleVariable} vars
 */
function set(style) {
  if (_typeof(style.variables) !== 'object') {
    console.error({
      err: 'In set style function: vars is not an object',
      style: style
    });
    return;
  }

  if (_typeof(style) !== 'object') {
    console.error({
      err: 'In set style function: style is not an object or an array of objects',
      style: style
    });
    return;
  }

  (0, _setEachStyle.default)(style);
}