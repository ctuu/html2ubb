import { BaseStrategy } from "./base";

export class URLStrategy extends BaseStrategy {
    match(node: Node): boolean {
        return node.nodeName.toLocaleLowerCase() === 'a'
    }

    createTag(node: Node) {
        const url = (node as Element).attributes.getNamedItem('href')?.value
        return {
            prefix: `[url=${url}]`,
            suffix: `[/url]`
        }
    }
}