// tslint:disable:no-eval
export default function calcVariable(
    css: string | string[],
    vars: IStyleVariable,
) {
    if (Array.isArray(css)) {
        css = css.join(';');
    }
    const reggex = /#{([$.\w\s()+\-*/]+)}/g;
    const replace = (_: string, attr: string) => vars[attr];
    const match = (_: string, $1: string) =>
        eval($1.replace(/\$(\w+)/g, replace));
    return css.replace(reggex, match);
}
