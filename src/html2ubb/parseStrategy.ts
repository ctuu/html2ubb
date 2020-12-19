import { BackColorStrategy } from "./strategys/back-color";
import { BaseStrategy } from "./strategys/base";
import { BlockStrategy } from "./strategys/block";
import { BRStrategy } from "./strategys/br";
import { FontColorStrategy } from "./strategys/font-color";
import { FontSizeStrategy } from "./strategys/font-size";
import { QuoteStrategy } from "./strategys/quote";
import { TextStrategy } from "./strategys/text";
import { UBBStrategy } from "./strategys/ubb";
import { URLStrategy } from "./strategys/url";

export interface UBBTag {
    prefix: string
    suffix: string
}

export interface ParseStrategy {
    match(node: Node): boolean;
    createTag(node: Node): UBBTag;
}


export const parseStrategyList: ParseStrategy[] = [
    new TextStrategy(),
    new FontSizeStrategy(),
    new FontColorStrategy(),
    new BackColorStrategy(),
    new BlockStrategy(),
    new BRStrategy(),
    new URLStrategy(),
    new QuoteStrategy(),
    new UBBStrategy(),
    new BaseStrategy()
]