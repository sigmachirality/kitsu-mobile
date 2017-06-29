import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';
import { LoginScreen, SignupScreen, RecoveryScreen, SplashScreen } from './screens/Auth';
import {
  SearchScreen,
  SearchCategory,
  SearchResults,
  SearchFilter,
  FilterSub,
} from './screens/Search';
import NotificationsScreen from './screens/Notifications/NotificationsScreen';
import {
  MediaScreen,
  CustomLibScreen,
  ProfileScreen,
  FavoriteCharacters,
  NetworkScreen,
  FavoriteMedia,
  LibraryScreen,
} from './screens/Profiles';
import * as colors from './constants/colors';

const SearchStack = StackNavigator(
  {
    SearchAll: {
      screen: SearchScreen,
    },
    SearchCategory: {
      screen: SearchCategory,
    },
    SearchResults: {
      screen: SearchResults,
    },
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkPurple, height: 64 },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 0,
      },
    },
  },
);

const NotifStack = StackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
    },
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkPurple, height: 83 },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -10,
      },
    },
  },
);

const ProfileStack = StackNavigator(
  {
    UserProfile: {
      screen: ProfileScreen,
    },
    Media: {
      screen: MediaScreen,
    },
    Library: {
      screen: CustomLibScreen,
    },
    Network: {
      screen: NetworkScreen,
    },
    FavoriteCharacters: {
      screen: FavoriteCharacters,
    },
    FavoriteMedia: {
      screen: FavoriteMedia,
    },
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkPurple, height: 50 },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -10,
      },
    },
  },
);

const FilterStack = StackNavigator(
  {
    Filter: {
      screen: SearchFilter,
    },
    FilterCategory: {
      screen: SearchCategory,
    },
    FilterSub: {
      screen: FilterSub,
    },
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkPurple, height: 64 },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -10,
      },
    },
  },
);

const Tabs = TabNavigator(
  {
    Profile: {
      screen: ProfileStack,
    },
    Search: {
      screen: SearchStack,
    },
    Feed: {
      screen: HomeScreen,
    },
    Notif: {
      screen: NotifStack,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.tabRed,
      showLabel: false,
      lazy: true,
      style: { height: 44 },
    },
  },
);

const Root = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Onboarding: {
      screen: OnboardingScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Recovery: {
      screen: RecoveryScreen,
    },
    Tabs: {
      screen: Tabs,
    },
    SearchFilter: {
      screen: FilterStack,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkPurple, height: 64 },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -10,
      },
    },
  },
);

export default Root;
