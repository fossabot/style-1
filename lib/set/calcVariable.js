"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calcVariable;

// tslint:disable:no-eval
function calcVariable(css, vars) {
  if (Array.isArray(css)) {
    css = css.join(';');
  }

  var reggex = /#{([$.\w\s()+\-*/]+)}/g;

  var replace = function replace(_, attr) {
    return vars[attr];
  };

  var match = function match(_, $1) {
    return eval($1.replace(/\$(\w+)/g, replace));
  };

  return css.replace(reggex, match);
}