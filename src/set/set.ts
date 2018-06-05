import { IStyle } from '../inteface.js';
import setEachStyle from './setEachStyle.js';

/**
 *
 * @param {IStyle | IStyle[]} style
 * @param {IStyleVariable} vars
 */
export default function set(style: IStyle): void {
    if (typeof style.variables !== 'object') {
        console.error({
            err: 'In set style function: vars is not an object',
            style,
        });
        return;
    }
    if (typeof style !== 'object') {
        console.error({
            err:
                'In set style function: style is not an object or an array of objects',
            style,
        });
        return;
    }
    setEachStyle(style);
}
