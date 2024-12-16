import { useTheme } from '@/hooks';
import { changeUserID } from '@/store/user';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import { useRookSyncConfiguration } from 'react-native-rook-sdk-health-connect';
import { useDispatch } from 'react-redux';

export const UpdateUserIDConfig = () => {
  const [currentUserID, setCurrentUserID] = useState('User id');

  const { Fonts, Gutters, Common } = useTheme();
  const dispatch = useDispatch();

  const { ready, updateUserID, clearUserID, syncUserTimeZone, getUserID } =
    useRookSyncConfiguration();

  useEffect(() => {
    if (ready) {
      getUserID()
        .then(userID => setCurrentUserID(userID))
        .catch(console.log);
    }
  }, [ready]);

  const handleUpdateUserId = async (): Promise<void> => {
    try {
      await updateUserID(currentUserID);
      console.log(currentUserID);
      dispatch(changeUserID({ userID: currentUserID }));

      ToastAndroid.show('User updated', ToastAndroid.LONG);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearUser = async (): Promise<void> => {
    try {
      await clearUserID();
      dispatch(changeUserID({ userID: '' }));
      setCurrentUserID('');

      ToastAndroid.show('User updated', ToastAndroid.LONG);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSyncTimezone = async (): Promise<void> => {
    try {
      await syncUserTimeZone();

      ToastAndroid.show('Timezone updated', ToastAndroid.LONG);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={Gutters.tinyHMargin}>
        <Text style={[Fonts.titleSmall, Fonts.textCenter]}>
          Configure your user id
        </Text>
        <Text style={[Fonts.textSmall, Fonts.textWhite]}>
          Current User ID: {currentUserID}{' '}
        </Text>
        <TextInput
          style={[Fonts.textSmall, Fonts.textWhite, Common.input.base]}
          value={currentUserID}
          onChangeText={text => setCurrentUserID(text)}
          placeholder="Ingrese el UserID"
        />
      </View>
      <TouchableWithoutFeedback onPress={handleUpdateUserId}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Update UserID
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleClearUser}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Clear UserID
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleSyncTimezone}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Update Timezone
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
