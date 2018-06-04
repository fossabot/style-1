export default function insertRule(
    sheet: CSSStyleSheet,
    selector: string,
    rules: string,
    index: number = sheet.cssRules.length,
) {
    sheet.insertRule(`${selector} { ${rules} }`, index);
}
