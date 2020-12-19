import { ParseStrategy, UBBTag } from "../parseStrategy";

export class BaseStrategy implements ParseStrategy {
    match(_: Node): boolean {
        return true
    }

    createTag(_: Node): UBBTag {
        return {
            prefix: '',
            suffix: ''
        }
    }
}