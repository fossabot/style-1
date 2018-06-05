import Vue from 'vue';

export default function get(
    property: string,
    self: Vue,
    defaultValue: number,
): number {
    let value: number = 0;
    if (property === 'size') {
        if (self.$el.getAttribute) {
            value = Number(self.$el.getAttribute('size'));
            if (value === 0) {
                value = get('parentSize', self, defaultValue);
            }
        }
    } else if (property === 'parentSize') {
        let closest: HTMLElement | null = self.$el;
        do {
            closest = closest.parentElement;
            if (closest == null) {
                break;
            }
            value = Number(closest.getAttribute('size'));
        } while (value == null);
    } else {
        console.warn(
            'property is undefined, value will be set to defaultValue',
        );
    }
    return value || defaultValue;
}
