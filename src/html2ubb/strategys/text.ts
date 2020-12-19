import { BaseStrategy } from "./base";

export class TextStrategy extends BaseStrategy {
    match(node: Node): boolean {
        return node.nodeName === '#text'
    }

    createTag(node: Node) {
        return {
            prefix: `${node.textContent}`,
            suffix: ''
        }
    }
}