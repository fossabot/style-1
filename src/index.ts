import Vue from 'vue';
import get from './get/get';
import { IStyle, IStyleVariable } from './inteface';
import initialize from './set/initialize';
import { setVariables } from './variable/variable';

export default {
    getAttribute: get as (
        property: string,
        self: Vue,
        defaultValue: number,
    ) => number,
    initialize: initialize as (style: IStyle) => void,
    setVariables: setVariables as (variables: IStyleVariable) => void,
};
