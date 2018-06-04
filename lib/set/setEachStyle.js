"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachStyle;

var _calcVariable = _interopRequireDefault(require("./calcVariable"));

var _setRule = _interopRequireDefault(require("./setRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eachStyle(style, vars) {
  for (var RawSelector in style.rules) {
    if (style.rules.hasOwnProperty(RawSelector)) {
      var selector = (0, _calcVariable.default)(RawSelector, vars).replace(/\s+/g, ' ');
      var rule = (0, _calcVariable.default)(style.rules[RawSelector], vars).replace(/\s+/g, ' ');
      (0, _setRule.default)(selector, rule, style.group, style.overwrite);
    }
  }
}