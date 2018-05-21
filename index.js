//@flow

import {
  keyBoardAPI,

  addKeyBoardHideListener,
  addKeyBoardShowListener,
  removeKeyBoardListener,

  currentHeight,

  CustomTextInput,
} from './src/customKeyboard'

import NumberKeyBoardView from './src/views/NumberKeyBoard'
import SafeKeyBoardView from './src/views/SafeKeyBoard'
import AwareCusKeyBoardScrollView from './src/AwareCusKeyBoardScrollView'

export {
  addKeyBoardHideListener,
  removeKeyBoardListener,
  addKeyBoardShowListener,

  currentHeight,

  CustomTextInput,
  AwareCusKeyBoardScrollView,

  NumberKeyBoardView,
  SafeKeyBoardView,
  keyBoardAPI,
}
