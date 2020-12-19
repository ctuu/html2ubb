import { BaseStrategy } from "./base";

export class QuoteStrategy extends BaseStrategy {
    match(node: Node): boolean {
        return node.nodeName.toLocaleLowerCase() === 'blockquote'
    }

    createTag(_: Node) {
        return {
            prefix: '[quote]',
            suffix: '[/quote]'
        }
    }
}