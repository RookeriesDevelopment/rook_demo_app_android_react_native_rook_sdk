import { useTheme } from '@/hooks';
import { UserState, changeUserID } from '@/store/user';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import { useRookSyncConfiguration } from 'react-native-rook-sdk-health-connect';
import { useSelector, useDispatch } from 'react-redux';

export const UpdateUserIDConfig = () => {
  const [currentUserID, setCurrentUserID] = useState('User id');

  const { Fonts, Gutters, Common } = useTheme();
  const dispatch = useDispatch();

  const { userID } = useSelector((state: { user: UserState }) => state.user);

  const { ready, updateUserID, clearUserID, syncUserTimeZone } =
    useRookSyncConfiguration();

  useEffect(() => {
    if (userID && ready) {
      setCurrentUserID(userID);
      updateUserID(userID).catch();
    }
  }, [userID, ready]);

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
        <Text style={[Fonts.textSmall, Fonts.textWhite]}>Current User ID:</Text>
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
            Actualizar UserID
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
