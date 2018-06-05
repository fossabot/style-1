import { IStyleVariable } from '../inteface';
const globalVariable: IStyleVariable = {};

export function setVariables(variable: IStyleVariable): void {
    Object.assign(globalVariable, variable);
}

// tslint:disable:no-eval
export function evaluate(css: string | string[], inputVariables: IStyleVariable) {
    if (Array.isArray(css)) {
        css = css.join(';');
    }
    const reggex = /#{([$.\w\s()+\-*/]+)}/g;
    const variables = { ...globalVariable, ...inputVariables };
    const replace = (_: string, attr: string) => variables[attr];
    const match = (_: string, $1: string) =>
        eval($1.replace(/\$(\w+)/g, replace));
    return css.replace(reggex, match).replace(/\s+/g, ' ');
}
