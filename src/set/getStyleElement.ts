import { IStyleGroups } from '../inteface';

const styleGroups: IStyleGroups = {};

export default function(
    group: string = 'default',
    callback: (sheet: CSSStyleSheet | null) => void,
): void {
    if (!styleGroups.hasOwnProperty(group)) {
        styleGroups[group] = document.createElement('style');
        document.head.appendChild(styleGroups[group]);
        // styleGroups[group].sheet.properties = [];
    }
    callback(styleGroups[group].sheet as CSSStyleSheet | null);
}
