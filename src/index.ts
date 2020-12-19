import './index.css'

import { html2ubb } from './html2ubb'

let edit: HTMLInputElement | null = document.querySelector('#html-edit')
let ubb = document.querySelector('#ubb-output')

const convertButton = document.querySelector('#convert')

convertButton?.addEventListener('click', () => {
    ubb!.innerHTML = html2ubb(edit?.value ?? '')
})