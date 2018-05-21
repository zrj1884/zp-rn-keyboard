import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
  'Module RCTImageLoader requires main queue setup since it overrides'
]);

AppRegistry.registerComponent('RNDemo', () => App);
