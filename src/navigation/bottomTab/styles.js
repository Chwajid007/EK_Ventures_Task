import {StyleSheet} from 'react-native';
import {getFontSize} from '../../assets/utils/ResponsiveFn';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  icon: {
    marginTop: getFontSize(1),
  },
  focusedLine: {
    position: 'absolute',
    top: 0,
    width: '80%',
    height: getFontSize(0.5),
    backgroundColor: '#3361BA',
    borderBottomLeftRadius: getFontSize(1),
    borderBottomRightRadius: getFontSize(1),
  },
  tabBarStyle: {
    height: 80,
    paddingBottom: getFontSize(3),
    borderTopWidth: getFontSize(0.08),
  },
});

export default styles;
