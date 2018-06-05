"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.calc = calc;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var globalVariable = {};

function set(key, value) {
  globalVariable[key] = value;
} // tslint:disable:no-eval


function calc(css, inputVariables) {
  if (Array.isArray(css)) {
    css = css.join(';');
  }

  var reggex = /#{([$.\w\s()+\-*/]+)}/g;

  var variables = _objectSpread({}, globalVariable, inputVariables);

  var replace = function replace(_, attr) {
    return variables[attr];
  };

  var match = function match(_, $1) {
    return eval($1.replace(/\$(\w+)/g, replace));
  };

  return css.replace(reggex, match).replace(/\s+/g, ' ');
}