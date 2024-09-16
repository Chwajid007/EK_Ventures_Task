import {StyleSheet} from 'react-native';
import {getFontSize} from '../../assets/utils/ResponsiveFn';
import {FontFamily} from '../../theme';

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  topOverlay: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginRight: getFontSize(2),
  },
  bottomOverlay: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  likes: {
    color: 'white',
    fontSize: 18,
  },
  comments: {
    color: 'white',
    fontSize: getFontSize(2),
    marginBottom: 20,
    fontFamily: FontFamily.sfProBold,
    fontWeight: '500',
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: getFontSize(2),
  },
});

export default styles;
