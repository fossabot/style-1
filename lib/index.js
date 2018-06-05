"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getAttribute = _interopRequireDefault(require("./code/getAttribute"));

var _initialize = _interopRequireDefault(require("./code/initialize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getAttribute: _getAttribute.default,
  initialize: _initialize.default
};
exports.default = _default;