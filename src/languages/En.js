import { AlphabetInterface } from '../utils.js'

export default class extends AlphabetInterface {
  constructor() {
    super();
  }

  Digit(upper) {
    return upper ? {
      Digit1: '!',
      Digit2: '@',
      Digit3: '#',
      Digit4: '$',
      Digit5: '%',
      Digit6: '^',
      Digit7: '&',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
    } : {
      Digit1: 1,
      Digit2: 2,
      Digit3: 3,
      Digit4: 4,
      Digit5: 5,
      Digit6: 6,
      Digit7: 7,
      Digit8: 8,
      Digit9: 9,
      Digit0: 0,
    }
  }
  Char(upper) {
    return upper ? {
      KeyQ: 'Q',
      KeyW: 'W',
      KeyE: 'E',
      KeyR: 'R',
      KeyT: 'T',
      KeyY: 'Y',
      KeyU: 'U',
      KeyI: 'I',
      KeyO: 'O',
      KeyP: 'P',
      KeyA: 'A',
      KeyS: 'S',
      KeyD: 'D',
      KeyF: 'F',
      KeyG: 'G',
      KeyH: 'H',
      KeyJ: 'J',
      KeyK: 'K',
      KeyL: 'L',
      KeyZ: 'Z',
      KeyX: 'X',
      KeyC: 'C',
      KeyV: 'V',
      KeyB: 'B',
      KeyN: 'N',
      KeyM: 'M',
    } : {
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      KeyA: 'a',
      KeyS: 's',
      KeyD: 'd',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      KeyZ: 'z',
      KeyX: 'x',
      KeyC: 'c',
      KeyV: 'v',
      KeyB: 'b',
      KeyN: 'n',
      KeyM: 'm',
    }
  }
  Special(upper) {
    return upper ? {
      BracketLeft: '{',
      BracketRight: '}',
      Semicolon: ':',
      Quote: '"',
      Comma: '<',
      Period: '>',
      Slash: '?',
      Backquote: '~',
      Minus: '_',
      Equal: '+',
      Backslash: '|',
    } : {
      BracketLeft: '[',
      BracketRight: ']',
      Semicolon: ';',
      Quote: '\'',
      Comma: ',',
      Period: '.',
      Slash: '/',
      Backquote: '`',
      Minus: '-',
      Equal: '=',
      Backslash: '\\',
    }
  }
}
