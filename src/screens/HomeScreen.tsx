import React, { useEffect } from 'react';
import { Link } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { UpdateUserID } from '@/components';
import { useRookSyncConfiguration } from 'react-native-rook-sdk-health-connect';

export const HomeScreen = () => {
  const { Common, Fonts, Gutters } = useTheme();
  const { ready, scheduleYesterdaySync } = useRookSyncConfiguration();

  useEffect(() => {
    if (ready) {
      scheduleYesterdaySync('latest').then(console.log).catch(console.log);
    }
  }, [ready]);

  return (
    <View>
      <UpdateUserID />

      <Text style={[Fonts.titleSmall, Fonts.textCenter, Gutters.smallVMargin]}>
        Choose your options
      </Text>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Permissions' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Permissions
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Summaries' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Summaries
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Events' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Events
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Sources' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Include other sources
          </Text>
        </Link>
      </View>
    </View>
  );
};
