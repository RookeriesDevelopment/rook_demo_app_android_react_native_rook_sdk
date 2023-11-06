import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import { useRookSyncEvents } from 'react-native-rook-sdk-health-connect';

export const EventsScreen = () => {
  const { Fonts, Gutters, Common } = useTheme();

  const [date, setDate] = useState('');
  const [data, setData] = useState('');

  const {
    ready,
    syncPhysicalEvents,
    syncBloodGlucoseEvents,
    syncBloodPressureEvents,
    syncBodyMetricsEvents,
    syncBodyHeartRateEvents,
    syncPhysicalHeartRateEvents,
    syncHydrationEvents,
    syncNutritionEvents,
    syncPhysicalOxygenationEvents,
    syncBodyOxygenationEvents,
    syncTemperatureEvents,
    syncPendingEvents,
  } = useRookSyncEvents();

  const handleSyncPhysicalEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPhysicalEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBloodGlucoseEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBloodGlucoseEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBloodPressureEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBloodPressureEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBodyMetricsEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBodyMetricsEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBodyHeartRateEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBodyHeartRateEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncPhysicalHeartRateEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPhysicalHeartRateEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncNutritionEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncNutritionEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncHydrationEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncHydrationEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncPhysicalOxygenationEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPhysicalOxygenationEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBodyOxygenationEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBodyOxygenationEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncTemperatureEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncTemperatureEvents(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPendingEvents();
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  return ready ? (
    <View>
      <View style={Gutters.tinyHMargin}>
        <TextInput
          value={date}
          style={[Common.input.base]}
          placeholder="YYYY-MM-DD"
          onChangeText={setDate}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncPhysicalEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Physical Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncBloodGlucoseEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Blood Glucose Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncBloodPressureEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Blood Pressure Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncBodyMetricsEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Body Metrics events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncBodyHeartRateEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Body Heart Rate Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncPhysicalHeartRateEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Physical Heart Rate Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncNutritionEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Nutrition Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncHydrationEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Hydration Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncBodyOxygenationEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Body Oxygenation Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback
            onPress={handleSyncPhysicalOxygenationEvents}
          >
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Physical Oxygenation Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncTemperatureEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Temperature Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.gridItem}>
          <TouchableWithoutFeedback onPress={handleSyncEvents}>
            <View style={Common.button.rounded}>
              <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
                Sync Pending Events
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <Text style={[Fonts.textSmall, Fonts.textWhite]}>{data}</Text>
    </View>
  ) : (
    <Text>Loading . . .</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTouch: {
    backgroundColor: '#383A4E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: '5%',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
