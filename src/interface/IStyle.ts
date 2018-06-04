interface IStyle {
    group: string;
    overwrite: boolean;
    rules: {
        [key: string]: string | string[];
    };
}
