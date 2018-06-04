"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertRule;

function insertRule(sheet, selector, rules) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sheet.cssRules.length;
  sheet.insertRule("".concat(selector, " { ").concat(rules, " }"), index);
}