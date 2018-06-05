import { IRule } from './../inteface';
export default function(
    sheet: CSSStyleSheet,
    selector: string,
    rules: IRule,
    index: number = sheet.cssRules.length,
) {
    const declaration = Object.keys(rules)
        .map((property, _) => `${toKebab(property)}:${rules[property]};`)
        .join('');
    sheet.insertRule(`${selector} { ${declaration} }`, index);
}

function toKebab(camel: string) {
    return camel.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
