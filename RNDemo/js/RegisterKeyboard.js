import { keyBoardAPI, NumberKeyBoardView, SafeKeyBoardView } from 'zp-rn-keyboard';

/**
 *  注册数字键盘
 */
keyBoardAPI('numberKeyBoard')(NumberKeyBoardView, {
  showHeader: true, keyboardType: 'number-pad', disableOtherText: true, disableDot: true,
});
keyBoardAPI('numberKeyBoardWithoutHeader')(NumberKeyBoardView, {
  showHeader: false, keyboardType: 'number-pad', disableOtherText: true, disableDot: true,
});
keyBoardAPI('numberKeyBoardWithDot')(NumberKeyBoardView, {
  showHeader: true, keyboardType: 'number-pad', disableOtherText: true, disableDot: false,
});
keyBoardAPI('numberKeyBoardWithDotWithoutHeader')(NumberKeyBoardView, {
  showHeader: false, keyboardType: 'number-pad', disableOtherText: true, disableDot: false,
});

/**
 * 注册数字，字母，符号切换键盘
 */
keyBoardAPI('safeKeyBoardWithHeader')(SafeKeyBoardView, { showHeader: true });
keyBoardAPI('safeKeyBoardWithOutHeader')(SafeKeyBoardView, { showHeader: false });
