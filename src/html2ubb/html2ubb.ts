import { convert } from './convert'
const parser = new DOMParser()

export function html2ubb(htmlString: string): string {
    const root = parser.parseFromString(htmlString, 'text/html')

    return convert(root.body)
}