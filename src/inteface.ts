export interface IStyle {
    group: string;
    overwrite: boolean;
    rules: {
        [key: string]: string | string[];
    };
    variables: IStyleVariable;
}

export interface IStyleGroups {
    [key: string]: HTMLStyleElement;
}

export interface IStyleVariable {
    [key: string]: string;
}
