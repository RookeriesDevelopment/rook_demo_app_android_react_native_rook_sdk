import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { RookSyncGate } from 'react-native-rook-sdk-health-connect';
import { credentials } from '@/utils/credentials';

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <RookSyncGate
      environment="production"
      clientUUID={credentials.uuid}
      password={credentials.password}
    >
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </RookSyncGate>
  );
};

export default ApplicationNavigator;
