import React, { Component } from 'react';
import { StyleSheet, BackHandler, View, TextInput } from 'react-native';

import "./js/RegisterKeyboard";
import * as CustomKeyboard from 'zp-rn-keyboard';

export default class App extends Component {
  componentWillMount() {
    if (this._showCustomKeyboardSub) {
      CustomKeyboard.removeKeyBoardListener(this._showCustomKeyboardSub);
    }
    if (this._hideCustomKeyboardSub) {
      CustomKeyboard.removeKeyBoardListener(this._hideCustomKeyboardSub);
    }
    BackHandler.removeEventListener('hardwareBackPress', this._handleBack);
  }

  componentDidMount() {
    this._showCustomKeyboardSub = CustomKeyboard.addKeyBoardShowListener(this._showCustomKeyboard);
    this._hideCustomKeyboardSub = CustomKeyboard.addKeyBoardHideListener(this._hideCustomKeyboard);
    BackHandler.addEventListener('hardwareBackPress', this._handleBack);
  }

  _showCustomKeyboard = (tag) => {
    this._keyborardShow = true;
    this._focusTextTag = tag;
  }

  _hideCustomKeyboard = (tag) => {
    this._keyborardShow = false;
    this._focusTextTag = tag;
  }

  _handleBack = () => {
    if (this._keyborardShow) {
      console.log(this._focusTextTag)
      console.log(TextInput.State.currentlyFocusedField());
      TextInput.State.blurTextInput(TextInput.State.currentlyFocusedField());
    }
    console.log('=======000=======')
    return this._keyborardShow;
  }

  render() {
    return (
      <CustomKeyboard.AwareCusKeyBoardScrollView style={{ flex: 1 }}>
        <View style={{ height: 250, backgroundColor: 'red' }} />
        <View style={{ height: 250, backgroundColor: 'green' }} />
        <CustomKeyboard.CustomTextInput
          customKeyboardType="numberKeyBoard"
          placeholder="numberKeyBoard"
          style={{ marginTop: 20 }}
        />
        <CustomKeyboard.CustomTextInput
          customKeyboardType="numberKeyBoardWithDot"
          placeholder="numberKeyBoardWithDot"
        />
        <CustomKeyboard.CustomTextInput
          customKeyboardType="safeKeyBoardWithOutHeader"
          placeholder="safeKeyBoardWithOutHeader"
        />
        <CustomKeyboard.CustomTextInput
          customKeyboardType="safeKeyBoardWithHeader"
          placeholder="safeKeyBoardWithHeader"
        />
        <TextInput style={{ height: 40, width: 200 }} />
      </CustomKeyboard.AwareCusKeyBoardScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
