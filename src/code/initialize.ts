import { IStyle } from '../inteface.js';
import setEachStyle from './setEachStyle.js';

export default function(style: IStyle): void {
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
    setEachStyle(style);
}
