import Vue from 'vue';
import get from './get/get';
import { IStyle } from './inteface';
import set from './set/set';
import { set as setVariable } from './variable/variable';

export default {
    get: get as (property: string, self: Vue, defaultValue: number) => number,
    set: set as (style: IStyle) => void,
    setVariable: setVariable as (key: string, value: string) => void,
};
