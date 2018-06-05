import { IStyleVariable } from '../inteface';
export declare function set(key: string, value: string): void;
export declare function calc(css: string | string[], inputVariables: IStyleVariable): string;
