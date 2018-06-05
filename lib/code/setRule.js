"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getStyleSheet = _interopRequireDefault(require("./getStyleSheet"));

var _insertRule = _interopRequireDefault(require("./insertRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(selector, rules, group, overwrite) {
  (0, _getStyleSheet.default)(group, function (sheet) {
    if (sheet == null) {
      return;
    } else {
      var selectorText = formatSelectorText(sheet, selector);
      var length = sheet.cssRules.length;
      var ruleIndex = -1;

      for (var index = 0; index < length; index++) {
        var rule = getStyleRule(sheet, index);

        if (selectorText === rule.selectorText) {
          ruleIndex = index;
          break;
        }
      }

      if (ruleIndex === -1) {
        (0, _insertRule.default)(sheet, selector, rules);
      } else if (overwrite) {
        (0, _insertRule.default)(sheet, selector, rules, ruleIndex);
      }
    }
  });
}

function formatSelectorText(sheet, selector) {
  (0, _insertRule.default)(sheet, selector, {}, 0);
  var firstRule = getStyleRule(sheet, 0);
  var selectorText = firstRule.selectorText;
  sheet.deleteRule(0);
  return selectorText;
}

function getStyleRule(sheet, index) {
  return sheet.cssRules[index];
}