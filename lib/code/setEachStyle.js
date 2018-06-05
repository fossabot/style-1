"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _setRule = _interopRequireDefault(require("./setRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(style) {
  for (var selector in style.rules) {
    if (style.rules.hasOwnProperty(selector)) {
      var rule = style.rules[selector];
      (0, _setRule.default)(selector, rule, style.group, style.overwrite);
    }
  }
}