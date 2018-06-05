"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

/**
 * @name get
 * @param {String} property
 * @param {Vue} self
 * @param {number} defaultValue
 */
function get(property, self, defaultValue) {
  var value = 0;

  if (property === 'size') {
    if (self.$el.getAttribute) {
      value = Number(self.$el.getAttribute('size'));

      if (value === 0) {
        value = get('parentSize', self, defaultValue);
      }
    }
  } else if (property === 'parentSize') {
    var closest = self.$el;

    do {
      closest = closest.parentElement;

      if (closest == null) {
        break;
      }

      value = Number(closest.getAttribute('size'));
    } while (value == null);
  } else {
    console.warn('property is undefined, value will be set to defaultValue');
  }

  return value || defaultValue;
}