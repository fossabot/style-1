import { IStyle, IStyleVariable } from '../inteface';
import calcVariable from './calcVariable';
import setRule from './setRule';

export default function eachStyle(style: IStyle, vars: IStyleVariable) {
    for (const RawSelector in style.rules) {
        if (style.rules.hasOwnProperty(RawSelector)) {
            const selector = calcVariable(RawSelector, vars).replace(
                /\s+/g,
                ' ',
            );
            const rule = calcVariable(style.rules[RawSelector], vars).replace(
                /\s+/g,
                ' ',
            );
            setRule(selector, rule, style.group, style.overwrite);
        }
    }
}
