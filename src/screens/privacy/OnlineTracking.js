import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class OnlineTracking extends Component {
  render() {
    return <WebView source={{ uri: 'http://www.fiveguys.com/terms-of-use-website' }} />;
  }
}

export default OnlineTracking;