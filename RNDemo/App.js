import React, { Component } from 'react';
import { StyleSheet, BackHandler, View, TextInput } from 'react-native';

import "./js/RegisterKeyboard";
import * as CustomKeyboard from 'fego-rn-keyboard';

export default class App extends Component {
  componentDidMount() {
    console.log('==============')
    CustomKeyboard.addKeyBoardShowListener(this._monitKeyboard);
    CustomKeyboard.addKeyBoardHideListener(this._hideKeyboard)
    BackHandler.addEventListener('hardwareBackPress', this._handleBack);
  }

  componentWillUnmount() {
    CustomKeyboard.removeKeyBoardListener(this._monitKeyboard);
    CustomKeyboard.removeKeyBoardListener(this._hideKeyboard)
    BackHandler.removeEventListener('hardwareBackPress', this._handleBack);
  }

  _monitKeyboard = (tag) => {
    this._keyborardShow = true;
    this._focusTextTag = tag;
  }

  _hideKeyboard = (tag) => {
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
          customKeyboardType="safeKeyBoard"
          placeholder="safeKeyBoard"
        />
        <CustomKeyboard.CustomTextInput
          customKeyboardType="testKeyboard"
          placeholder="testKeyboard"
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
