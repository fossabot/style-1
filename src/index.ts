import Vue from 'vue';
import get from './get/get';
import { IStyle, IStyleVariable } from './inteface';
import set from './set/set';

export default {
    get: get as (property: string, self: Vue, defaultValue: number) => number,
    set: set as (style: IStyle | IStyle[], vars: IStyleVariable) => number,
};
