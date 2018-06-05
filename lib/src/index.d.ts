import Vue from 'vue';
import { IStyle, IStyleVariable } from './inteface';
declare const _default: {
    getAttribute: (property: string, self: Vue, defaultValue: number) => number;
    initialize: (style: IStyle) => void;
    setVariables: (variables: IStyleVariable) => void;
};
export default _default;
