import { IStyleVariable } from '../inteface';
export declare function setVariables(variable: IStyleVariable): void;
export declare function evaluate(css: string | string[], inputVariables: IStyleVariable): string;
