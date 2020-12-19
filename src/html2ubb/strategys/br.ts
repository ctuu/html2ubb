import { BaseStrategy } from "./base";

export class BRStrategy extends BaseStrategy {
    match(node: Node): boolean {
        return node.nodeName.toLocaleLowerCase() === 'br'
    }

    createTag(_: Node) {
        return {
            prefix: '\n',
            suffix: ''
        }
    }
}