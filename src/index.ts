import Vue from 'vue';
import getAttribute from './code/getAttribute';
import initialize from './code/initialize';
import { IStyle } from './inteface';

export default {
    getAttribute: getAttribute as (
        property: string,
        self: Vue,
        defaultValue: number,
    ) => number,
    initialize: initialize as (style: IStyle) => void,
};
