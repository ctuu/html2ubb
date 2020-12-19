import { BaseStrategy } from "./base";

export class FontColorStrategy extends BaseStrategy {
    match(node: Node): boolean {
        const isFont = node.nodeName.toLocaleLowerCase() === 'font'
        const hasColor = (node as Element).attributes.getNamedItem('color') != null
        return isFont && hasColor
    }

    createTag(node: Node) {
        const color = (node as Element).attributes.getNamedItem('color')?.value
        return {
            prefix: `[color=${color}]`,
            suffix: `[/color]`
        }
    }
}