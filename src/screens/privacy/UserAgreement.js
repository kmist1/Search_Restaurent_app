import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class UserAgreement extends Component {
  render() {
    return <WebView source={{ uri: 'http://www.fiveguys.com/privacy-policy' }} />;
  }
}

export default UserAgreement;