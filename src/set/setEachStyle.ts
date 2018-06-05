import { IStyle } from '../inteface';
import calcVariable from './calcVariable';
import setRule from './setRule';

export default function eachStyle(style: IStyle) {
    for (const rawSelector in style.rules) {
        if (style.rules.hasOwnProperty(rawSelector)) {
            const selector = calcVariable(rawSelector, style.variables);
            const rule = calcVariable(
                style.rules[rawSelector],
                style.variables,
            );
            setRule(selector, rule, style.group, style.overwrite);
        }
    }
}
