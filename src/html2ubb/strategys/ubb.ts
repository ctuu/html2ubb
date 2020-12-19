import { BaseStrategy } from "./base";

const ignoreList = ['body', 'span']

export class UBBStrategy extends BaseStrategy {
    match(node: Node): boolean {
        const name = node.nodeName.toLocaleLowerCase()
        return !ignoreList.includes(name)
    }

    createTag(node: Node) {
        const name = node.nodeName.toLocaleLowerCase()
        return {
            prefix: `[${name}]`,
            suffix: `[/${name}]`
        }
    }
}