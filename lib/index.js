"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("./get/get"));

var _initialize = _interopRequireDefault(require("./set/initialize"));

var _variable = require("./variable/variable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getAttribute: _get.default,
  initialize: _initialize.default,
  setVariables: _variable.setVariables
};
exports.default = _default;