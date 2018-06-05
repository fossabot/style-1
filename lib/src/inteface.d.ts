import { IRule } from './inteface';
export interface IConfig {
    group?: string;
    overwrite?: boolean;
    style: IStyle;
}
export interface IStyleGroups {
    [key: string]: HTMLStyleElement;
}
export interface IStyle {
    [key: string]: IRule;
}
export interface IRule {
    [key: string]: string;
}
