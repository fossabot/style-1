"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("./get/get"));

var _set = _interopRequireDefault(require("./set/set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  get: _get.default,
  set: _set.default
};
exports.default = _default;