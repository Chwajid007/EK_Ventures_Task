import {StatusBar, Dimensions, Platform, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {height} = Dimensions.get('window');
export function isIphoneX() {
  return Platform.OS === 'ios' && DeviceInfo.hasNotch();
}
export function getFontSize(font) {
  const deviceHeight = isIphoneX()
    ? height * 0.9
    : Platform.OS === 'android'
    ? height - StatusBar.currentHeight
    : height;
  const deviceHeightPercent = (font * deviceHeight) / 100;
  return Math.round(deviceHeightPercent);
}

export function HorizontalLine({style}) {
  return <View style={[styles.horizontalLine, style]} />;
}

const styles = {
  horizontalLine: {
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#C9CCD1',
  },
};

export const data = [
  {
    id: 1,
    likes_count: 15232,
    comments_count: 121,
    urls: {
      mp4: 'https://smt-rn-task.s3.eu-west-2.amazonaws.com/videos/1/vecteezy_woman-jogging-on-the-street_16027179.mp4',
    },
  },
  {
    id: 2,
    likes_count: 1001,
    comments_count: 23,
    urls: {
      mp4: 'https://smt-rn-task.s3.eu-west-2.amazonaws.com/videos/2/vecteezy_woman-practicing-yoga-in-the-nature_13136292.mp4',
    },
  },
  {
    id: 3,
    likes_count: 2311,
    comments_count: 544,
    urls: {
      mp4: 'https://smt-rn-task.s3.eu-west-2.amazonaws.com/videos/3/vecteezy_motion-background-people-are-relaxing-near-the-waterfall_39378677.mp4',
    },
  },
];

export const formatNumber = num => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' m';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' k';
  }
  return num.toString();
};
