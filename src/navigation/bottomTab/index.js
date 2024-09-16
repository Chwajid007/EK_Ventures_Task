import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../../theme';
import Home from '../../screens/Home';
import MediaScreen from '../../screens/Media';
import styles from './styles';

const Tab = createBottomTabNavigator();

const GamesScreen = () => (
  <View style={styles.screen}>
    <Text>Games</Text>
  </View>
);

const ReportsScreen = () => (
  <View style={styles.screen}>
    <Text>Reports</Text>
  </View>
);

const AccountScreen = () => (
  <View style={styles.screen}>
    <Text>Account</Text>
  </View>
);

// Define icon sizes
const iconSizes = {
  Home: {width: 24, height: 24},
  Media: {width: 23, height: 23},
  Games: {width: 22, height: 25},
  Reports: {width: 27, height: 37},
  Account: {width: 26, height: 26},
};

// Bottom Tab Navigator Component
export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let IconComponent;
          let label;

          switch (route.name) {
            case 'Home':
              IconComponent = icons.home;
              label = 'Home';
              break;
            case 'Media':
              IconComponent = icons.media;
              label = 'Media';
              break;
            case 'Games':
              IconComponent = icons.games;
              label = 'Games';
              break;
            case 'Reports':
              IconComponent = icons.reports;
              label = 'Reports';
              break;
            case 'Account':
              IconComponent = icons.account;
              label = 'Account';
              break;
            default:
              IconComponent = icons.home;
              break;
          }

          const {width, height} = iconSizes[label] || {width: 24, height: 24};
          const iconColor = focused ? '#3361BA' : '#FFFFFF';
          const stroke = focused ? 'none' : '#000';

          return (
            <View style={styles.iconContainer}>
              {label === 'Home' || label === 'Account' ? (
                <IconComponent
                  width={width}
                  height={height}
                  fill={iconColor}
                  stroke={stroke}
                />
              ) : (
                <Image
                  source={IconComponent}
                  style={[
                    styles.icon,
                    {
                      width,
                      height,
                      tintColor: focused ? '#3361BA' : '#000',
                      resizeMode: 'contain',
                    },
                  ]}
                />
              )}
              {focused && <View style={styles.focusedLine} />}
            </View>
          );
        },
        tabBarActiveTintColor: '#3361BA',
        tabBarInactiveTintColor: '#2e2e2e',
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Media" component={MediaScreen} />
      <Tab.Screen name="Games" component={GamesScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
