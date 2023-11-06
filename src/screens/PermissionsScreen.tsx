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
      const result = await checkPermissions('ALL');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestAllPermissions = async (): Promise<void> => {
    try {
      const result = await requestPermissions('ALL');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHasSleepPermissions = async (): Promise<void> => {
    try {
      const result = await checkPermissions('SLEEP');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestSleepPermissions = async (): Promise<void> => {
    try {
      const result = await requestPermissions('SLEEP');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHasPhysicalPermissions = async (): Promise<void> => {
    try {
      const result = await checkPermissions('PHYSICAL');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestPhysicalPermissions = async (): Promise<void> => {
    try {
      const result = await requestPermissions('PHYSICAL');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHasBodyPermissions = async (): Promise<void> => {
    try {
      const result = await checkPermissions('BODY');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestBodyPermissions = async (): Promise<void> => {
    try {
      const result = await requestPermissions('BODY');
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
            Has all Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleHasSleepPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Has sleep Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestSleepPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request sleep Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleHasPhysicalPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Has Physical Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestPhysicalPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Physical Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleHasBodyPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Has Body Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestBodyPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Body Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestAllPermissions}>
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
    </View>
  ) : (
    <Text>Loading . . .</Text>
  );
};
