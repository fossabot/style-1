import setEachStyle from './setEachStyle.js';

/**
 *
 * @param {IStyle | IStyle[]} style
 * @param {IStyleVariable} vars
 */
export default function set(
    style: IStyle | IStyle[],
    vars: IStyleVariable = {},
) {
    if (typeof vars !== 'object') {
        console.error({
            err: 'In set style function: vars is not an object',
            style,
            vars,
        });
        return;
    }
    if (Array.isArray(style)) {
        style.forEach((eachStyle: IStyle) => {
            setEachStyle(eachStyle, vars);
        });
    } else if (typeof style === 'object' && !Array.isArray(style)) {
        setEachStyle(style, vars);
    } else {
        console.error({
            err:
                'In set style function: style is not an object or an array of objects',
            style,
            vars,
        });
    }
}
