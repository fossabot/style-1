import getStyleElement from './getStyleElement';
import insertRule from './insertRule';

export default function setRule(
    selector: string,
    rules: string,
    group: string,
    overwrite: boolean,
) {
    getStyleElement(group, (sheet: CSSStyleSheet | null) => {
        if (sheet == null) {
            return;
        } else {
            const selectorText = formatSelectorText(sheet, selector);
            const length = sheet.cssRules.length;
            let ruleIndex: number = -1;
            for (let index = 0; index < length; index++) {
                const rule = getStyleRule(sheet, index);
                if (selectorText === rule.selectorText) {
                    ruleIndex = index;
                    break;
                }
            }
            if (ruleIndex === -1) {
                insertRule(sheet, selector, rules);
            } else if (overwrite) {
                insertRule(sheet, selector, rules, ruleIndex);
            }
        }
    });
}
function formatSelectorText(sheet: CSSStyleSheet, selector: string): string {
    insertRule(sheet, selector, '{}', 0);
    const firstRule = getStyleRule(sheet, 0);
    const selectorText = firstRule.selectorText;
    sheet.deleteRule(0);
    return selectorText;
}

function getStyleRule(sheet: CSSStyleSheet, index: number) {
    return sheet.cssRules[index] as CSSStyleRule;
}
