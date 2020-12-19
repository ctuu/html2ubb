import { parseStrategyList } from './parseStrategy'

export function convert(root: Node): string {
    for (let strategy of parseStrategyList) {
        if (strategy.match(root)) {
            let result = ''
            const tag = strategy.createTag(root)
            root.childNodes.forEach((node) => {
                result = result.concat(convert(node))
            })

            return tag.prefix + result + tag.suffix
        }
    }
    return ''
}