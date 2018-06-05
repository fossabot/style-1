import { IStyle } from '../inteface';
import { evaluate } from '../variable/variable';
import setRule from './setRule';

export default function eachStyle(style: IStyle) {
    for (const rawSelector in style.rules) {
        if (style.rules.hasOwnProperty(rawSelector)) {
            const selector = evaluate(rawSelector, style.variables);
            const rule = evaluate(style.rules[rawSelector], style.variables);
            setRule(selector, rule, style.group, style.overwrite);
        }
    }
}
