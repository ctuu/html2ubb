import { BaseStrategy } from "./base";

export class BlockStrategy extends BaseStrategy {
    blockList = ['div', 'p']
    match(node: Node): boolean {
        return this.blockList.includes(node.nodeName.toLocaleLowerCase())
    }

    createTag(_: Node) {
        return {
            prefix: '',
            suffix: '\n'
        }
    }
}