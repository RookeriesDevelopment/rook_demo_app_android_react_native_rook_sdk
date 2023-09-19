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

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <RookSyncGate
      rookApiURL="https://api.rook-connect.dev"
      clientUUID="9593d0ec-47c1-4477-a8ce-10d3f4f43127"
      password="YR9GoQ3mP0zey5nZ9w3WHQMvtvFvMdnefblx"
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
