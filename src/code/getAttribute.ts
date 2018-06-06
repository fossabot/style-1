import Vue from 'vue';

export default function getAttribute(
    property: string,
    self: Vue,
    defaultValue: string | number,
): string | number | null {
    let value: string | null = null;
    let closest: HTMLElement | null = self.$el;
    do {
        if (!closest || typeof closest.getAttribute !== 'function') {
            break;
        }
        value = closest.getAttribute(property);
        closest = closest.parentElement;
    } while (value == null);

    if (value == null) {
        return defaultValue;
    }
    if (typeof defaultValue === 'number') {
        return Number(value);
    } else {
        return value;
    }
}
