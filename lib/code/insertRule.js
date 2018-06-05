"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(sheet, selector, rules) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sheet.cssRules.length;
  var declaration = Object.keys(rules).map(function (property, _) {
    return "".concat(toKebab(property), ":").concat(rules[property], ";");
  }).join('');
  sheet.insertRule("".concat(selector, " { ").concat(declaration, " }"), index);
}

function toKebab(camel) {
  return camel.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}