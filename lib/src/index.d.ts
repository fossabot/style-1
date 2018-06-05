import Vue from 'vue';
import { IStyle } from './inteface';
declare const _default: {
    get: (property: string, self: Vue, defaultValue: number) => number;
    set: (style: IStyle) => void;
    setVariable: (key: string, value: string) => void;
};
export default _default;
