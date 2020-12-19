import { BaseStrategy } from "./base";

export class BackColorStrategy extends BaseStrategy {
    match(node: Node): boolean {
        const isFont = node.nodeName.toLocaleLowerCase() === 'font'
        const hasSize = (node as HTMLElement).style?.backgroundColor != null
        return isFont && hasSize
    }

    createTag(node: Node) {
        const color = (node as HTMLElement).style?.backgroundColor
        return {
            prefix: `[backcolor=${color}]`,
            suffix: `[/backcolor]`
        }
    }
}