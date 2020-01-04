import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import ConsentScreen from '../screens/ConsentScreen';

const ConsentStackNavigator = createStackNavigator(
  {
    Consent: ConsentScreen,
  },
  {
    initialRouteName: 'Consent',
  }
);

export default ConsentStackNavigator;
