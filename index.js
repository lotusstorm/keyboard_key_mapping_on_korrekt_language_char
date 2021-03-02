import { KeyCodeCharMap } from './src/mapper.js'


const En = new KeyCodeCharMap('en')

const inputField = document.getElementById('input')
const outputField = document.getElementById('output')

inputField.addEventListener('keydown', (event) => {
  console.log(event.code, event.shiftKey);
  let value = En.fromKeyToChar(event.code, event.shiftKey)
  outputField.innerText += value
})

