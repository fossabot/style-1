import { IStyle } from '../inteface';
import setRule from './setRule';

export default function(style: IStyle) {
    for (const selector in style.rules) {
        if (style.rules.hasOwnProperty(selector)) {
            const rule = style.rules[selector];
            setRule(
                selector,
                rule,
                style.group as string,
                style.overwrite as boolean,
            );
        }
    }
}
