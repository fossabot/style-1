"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachStyle;

var _variable = require("../variable/variable");

var _setRule = _interopRequireDefault(require("./setRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eachStyle(style) {
  for (var rawSelector in style.rules) {
    if (style.rules.hasOwnProperty(rawSelector)) {
      var selector = (0, _variable.calc)(rawSelector, style.variables);
      var rule = (0, _variable.calc)(style.rules[rawSelector], style.variables);
      (0, _setRule.default)(selector, rule, style.group, style.overwrite);
    }
  }
}