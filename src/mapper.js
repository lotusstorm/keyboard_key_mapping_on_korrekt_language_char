import En from './languages/En.js'

const Language = {
  Ru: 'ru',
  En: 'en',
}

const store = {
  [Language.En]: new En(),
}

export class KeyCodeCharMap {
  upperRegisterMap = null
  lowerRegisterMap = null

  constructor(lang = Language.En) {
    if (!Object.values(Language).includes(lang))
      throw new Error(`Language ${lang} is not support`)

    this._langMap = store[lang]
  }

  _charsOnNeedRegister(upper) {
    const { Digit, Char, Special } = this._langMap
    return { ...Digit(upper), ...Char(upper), ...Special(upper) }
  }

  fromKeyToChar(charCode, upper = false) {
    if (upper && !this.upperRegisterMap)
      this.upperRegisterMap = this._charsOnNeedRegister(upper)
    else if (!upper && !this.lowerRegisterMap)
      this.lowerRegisterMap = this._charsOnNeedRegister(upper)

    const keyCodes = upper ? this.upperRegisterMap : this.lowerRegisterMap
    return keyCodes[charCode] !== undefined ? keyCodes[charCode] : ''
  }
}



