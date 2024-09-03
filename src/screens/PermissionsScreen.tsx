import React from 'react';
import { useTheme } from '@/hooks';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRookSyncPermissions } from 'react-native-rook-sdk-health-connect';

export const PermissionsScreen = () => {
  const { Common, Fonts } = useTheme();

  const {
    ready,
    checkAvailability,
    openHealthConnectSettings,
    checkPermissions,
    requestPermissions,
    requestAndroidBackgroundPermissions,
  } = useRookSyncPermissions();

  const handleAvailability = async (): Promise<void> => {
    try {
      const result = await checkAvailability();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenHealthConnect = async (): Promise<void> => {
    try {
      const result = await openHealthConnectSettings();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHasAllPermissions = async (): Promise<void> => {
    try {
      const result = await checkPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      const result = await requestPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestBackgroundPermissions = async (): Promise<void> => {
    try {
      const result = await requestAndroidBackgroundPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return ready ? (
    <View>
      <TouchableWithoutFeedback onPress={handleAvailability}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Check Availability
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleOpenHealthConnect}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Open Health Connect
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleHasAllPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Has Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestBackgroundPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Background Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  ) : (
    <Text>Loading . . .</Text>
  );
};
