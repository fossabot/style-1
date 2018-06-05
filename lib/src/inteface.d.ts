export interface IStyle {
    group?: string;
    overwrite?: boolean;
    rules: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export interface IStyleGroups {
    [key: string]: HTMLStyleElement;
}
