import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks';
import { TextInput } from 'react-native';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';
import {
  useRookSyncConfiguration,
  useRookSyncSummaries,
} from 'react-native-rook-sdk-health-connect';

export const SyncSummariesScreen = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState('');

  const { getUserID } = useRookSyncConfiguration();

  useEffect(() => {
    getUserID().catch();
  }, []);

  const {
    syncSleepSummary,
    syncBodySummary,
    syncPhysicalSummary,
    syncPendingSummaries,
  } = useRookSyncSummaries();

  const { Common, Fonts, Gutters } = useTheme();

  const handleSyncSleep = async (): Promise<void> => {
    try {
      const result = await syncSleepSummary(date);
      setData(`${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBody = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      getUserID().then(console.log);
      const result = await syncBodySummary(date);
      setData(`${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncPhysical = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPhysicalSummary(date);
      setData(`${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSync = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPendingSummaries();
      setData(`${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  return (
    <View>
      <View style={Gutters.tinyHMargin}>
        <TextInput
          value={date}
          style={[Common.input.base]}
          placeholder="YYYY-MM-DD"
          onChangeText={setDate}
        />
      </View>

      <TouchableWithoutFeedback onPress={handleSyncSleep}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Sync Sleep
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleSyncBody}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Sync body
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleSyncPhysical}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Sync Physical
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleSync}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Sync Pending Summaries
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Text style={[Fonts.textSmall, Fonts.textWhite]}>{data}</Text>
    </View>
  );
};
