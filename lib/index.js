"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("./get/get"));

var _set = _interopRequireDefault(require("./set/set"));

var _variable = require("./variable/variable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  get: _get.default,
  set: _set.default,
  setVariable: _variable.set
};
exports.default = _default;