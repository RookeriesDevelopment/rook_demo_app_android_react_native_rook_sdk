import React from 'react';
import { useTheme } from '@/hooks';
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRookDataSources } from 'react-native-rook-sdk-health-connect';

export const SourcesScreen = () => {
  const { Common, Fonts } = useTheme();

  const { getAvailableDataSources, presentDataSourcesView, revokeDataSource } =
    useRookDataSources();

  const handleSources = async () => {
    try {
      console.log('loading . . .');
      const r = await getAvailableDataSources({
        redirectURL: 'https://example.com',
      });
      Alert.alert('Notice', 'The response was printed in the console', [
        { text: 'OK', onPress: () => {} },
      ]);
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePresent = async () => {
    try {
      console.log('loading . . .');
      const r = await presentDataSourcesView({
        redirectURL: 'https://example.com',
      });
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRevoke = async () => {
    try {
      await revokeDataSource('Fitbit');
      console.log('deleted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleSources}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Get Data sources
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePresent}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Present Data Sources View
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRevoke}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Revoke Fitbit
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
