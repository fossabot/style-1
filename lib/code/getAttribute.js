"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAttribute;

function getAttribute(property, self, defaultValue) {
  var value = null;
  var closest = self.$el;

  do {
    if (!closest || typeof closest.getAttribute !== 'function') {
      break;
    }

    value = closest.getAttribute(property);
    closest = closest.parentElement;
  } while (value == null);

  if (value == null) {
    return defaultValue;
  }

  if (typeof defaultValue === 'number') {
    return Number(value);
  } else {
    return value;
  }
}