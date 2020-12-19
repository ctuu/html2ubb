import { BaseStrategy } from "./base";

export class FontSizeStrategy extends BaseStrategy {
    match(node: Node): boolean {
        const isFont = node.nodeName.toLocaleLowerCase() === 'font'
        const hasSize = (node as Element).attributes.getNamedItem('size') != null
        return isFont && hasSize
    }

    createTag(node: Node) {
        const size = (node as Element).attributes.getNamedItem('size')?.value
        return {
            prefix: `[size=${size}]`,
            suffix: `[/size]`
        }
    }
}