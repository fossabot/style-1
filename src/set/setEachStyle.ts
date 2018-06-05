import { IStyle, IStyleVariable } from '../inteface';
import calcVariable from './calcVariable';
import setRule from './setRule';

export default function eachStyle(style: IStyle, vars: IStyleVariable) {
    for (const rawSelector in style.rules) {
        if (style.rules.hasOwnProperty(rawSelector)) {
            const selector = calcVariable(rawSelector, vars).replace(
                /\s+/g,
                ' ',
            );
            const rule = calcVariable(style.rules[rawSelector], vars).replace(
                /\s+/g,
                ' ',
            );
            setRule(selector, rule, style.group, style.overwrite);
        }
    }
}
