import { StyleSheet, Dimensions } from 'react-native';
import * as colors from 'kitsu/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPurple,
  },
  stretch: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
    bottom: 30,
    width: 150,
    height: 42,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tabsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.offBlack,
  },
  tab: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    textAlign: 'center',
    color: colors.transparentWhite,
    fontWeight: 'bold',
  },
  formsWrapper: {
    marginVertical: 8,
  },
  forgotTextWrapper: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  forgotDescription: {
    fontSize: 12,
    color: 'white',
    marginTop: 10,
    fontFamily: 'OpenSans',
    textAlign: 'center',
  },
  forgotTitle: {
    fontSize: 21,
    color: 'white',
    fontFamily: 'OpenSans',
    textAlign: 'center',
  },
});
