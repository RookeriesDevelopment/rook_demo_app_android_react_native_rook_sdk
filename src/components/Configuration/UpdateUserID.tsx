import { useTheme } from '@/hooks';
import { UserState, changeUserID } from '@/store/user';
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  AppState,
  StyleSheet,
} from 'react-native';
import { useRookSyncConfiguration, useRookSyncSummaries, } from 'react-native-rook-sdk-health-connect';
import { useSelector, useDispatch } from 'react-redux';

export const UpdateUserIDConfig = () => {
  const [currentUserID, setCurrentUserID] = useState('User id');
  const summariesManager = useRookSyncSummaries();

  const { Fonts, Gutters, Common } = useTheme();
  const dispatch = useDispatch();

  const { userID } = useSelector((state: { user: UserState }) => state.user);

  const { ready, updateUserID, clearUserID, syncUserTimeZone } =
    useRookSyncConfiguration();

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [isSync, setIsSync] = useState(false);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('app became active')
        handleUpdateYesterdaySummaries();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);


  useEffect(() => {
    if (userID && ready && summariesManager.ready) {
      setCurrentUserID(userID);
      updateUserID(userID).catch();
      handleUpdateYesterdaySummaries();
    }
  }, [userID, ready, summariesManager.ready]);

  const handleUpdateYesterdaySummaries = async (): Promise<void> => {
    setIsSync(true);
    console.log('sync ...')
    const result = await summariesManager.syncYesterdaySummaries();
    console.log('finish')
    setIsSync(false);
  };

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

  const handleSyncView = () => {
    if(isSync){
     return  (<View style= {styles.top}>
      <Text style={[Fonts.textWhite, Fonts.textCenter, Gutters.smallVMargin]}>
        Sync yesterday summaries ...</Text>
    </View>);
    } else {
      <View></View>
    }
  }

  return (
    <View>
      <View style={Gutters.tinyHMargin}>
        { handleSyncView() }
        <Text style={[Fonts.titleSmall, Fonts.textCenter]}>
          Configure your user id
        </Text>
        <Text style={[Fonts.textSmall, Fonts.textWhite]}>Current User ID: {currentUserID} </Text>
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

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'grey',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
})
