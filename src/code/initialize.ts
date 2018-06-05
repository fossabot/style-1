import { IConfig } from '../inteface';
import setRule from './setRule';

export default function(style: IConfig): void {
    if (typeof style !== 'object') {
        console.error({
            err:
                'In set style function: style is not an object or an array of objects',
            style,
        });
        return;
    }
    style.group = style.group || 'default';
    style.overwrite = style.overwrite || false;

    for (const selector in style.style) {
        if (style.style.hasOwnProperty(selector)) {
            const declaration = style.style[selector];
            setRule(
                selector,
                declaration,
                style.group as string,
                style.overwrite as boolean,
            );
        }
    }
}
