"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
Object.defineProperty(exports, "initialize", {
  enumerable: true,
  get: function get() {
    return _initialize.default;
  }
});
Object.defineProperty(exports, "getAttribute", {
  enumerable: true,
  get: function get() {
    return _getAttribute.default;
  }
});

var _initialize = _interopRequireDefault(require("./code/initialize"));

var _getAttribute = _interopRequireDefault(require("./code/getAttribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(style) {
  (0, _initialize.default)({
    style: style
  });
}