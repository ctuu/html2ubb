import { expect } from '@esm-bundle/chai'
import { html2ubb } from '../src/html2ubb'

interface TestContext {
    input: string
    output: string
}

function easyTest(title: string, context: TestContext) {
    it(title, () => {
        expect(html2ubb(context.input)).to.equal(context.output);
    });
}

easyTest('convert text', {
    input: 'hello world',
    output: 'hello world'
})

easyTest('convert ubb', {
    input: '<b>hello world</b>',
    output: '[b]hello world[/b]'
})

easyTest('convert br', {
    input: '<br>hello<br>world',
    output: '\nhello\nworld'
})

easyTest('convert quote', {
    input: '<blockquote>hello world</blockquote>',
    output: '[quote]hello world[/quote]'
})

easyTest('convert url', {
    input: `<a href="github.com">hello world</a>`,
    output: '[url=github.com]hello world[/url]'
})

easyTest('convert block', {
    input: '<div>hello world</div>',
    output: 'hello world\n'
})

easyTest('convert font size', {
    input: '<font size="4">hello world</font>',
    output: '[size=4]hello world[/size]'
})

easyTest('convert font color', {
    input: '<font color="#ff0000">hello world</font>',
    output: '[color=#ff0000]hello world[/color]'
})

easyTest('convert background color', {
    input: `<font style="background-color: rgb(247, 247, 247);">hello world</font>`,
    output: '[backcolor=rgb(247, 247, 247)]hello world[/backcolor]'
})

