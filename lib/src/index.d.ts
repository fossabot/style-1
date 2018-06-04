import Vue from 'vue';
import { IStyle, IStyleVariable } from './inteface';
declare const _default: {
    get: (property: string, self: Vue, defaultValue: number) => number;
    set: (style: IStyle | IStyle[], vars: IStyleVariable) => number;
};
export default _default;
