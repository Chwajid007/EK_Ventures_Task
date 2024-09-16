import {StyleSheet} from 'react-native';
import {FontFamily} from '../../theme';
import {getFontSize} from '../../assets/utils/ResponsiveFn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: FontFamily.light,
    fontSize: getFontSize(3.2),
    marginLeft: 5,
    color: '#000',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: getFontSize(5),
    height: getFontSize(13),
    resizeMode: 'contain',
    marginBottom: getFontSize(2),
    marginLeft: getFontSize(1.5),
  },
  greeting: {
    fontSize: getFontSize(2.5),
    fontFamily: FontFamily.sfProBold,
    marginTop: getFontSize(2),
    alignSelf: 'center',
    fontWeight: '500',
    color: '#000',
  },
  subGreeting: {
    fontSize: getFontSize(2.3),
    color: '#000',
    marginBottom: getFontSize(2),
    marginTop: getFontSize(2),
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  largeTitle: {
    fontSize: getFontSize(2),
    color: '#000',
    fontWeight: '500',
    fontFamily: FontFamily.sfProBold,
    height: getFontSize(2.7),
  },
  subTitle: {
    fontSize: getFontSize(1.5),
    color: '#000',
    marginTop: getFontSize(0.5),
  },
  mediaSection: {
    paddingHorizontal: 20,
    marginTop: getFontSize(3),
  },
  mediaTitle: {
    fontSize: getFontSize(2.3),
    fontWeight: '500',
    color: '#000',
  },
  mediaItem: {
    marginRight: 20,
    marginTop: getFontSize(3),
  },
  video: {
    width: getFontSize(25),
    height: getFontSize(40),
  },
  videoWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  uploadButton: {
    backgroundColor: '#3361BA',
    padding: 10,
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#34A653',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: getFontSize(8),
    width: '15%',
  },
  secondPortion: {
    backgroundColor: '#fef6e4',
    height: getFontSize(8),
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  iconContainerInside: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
