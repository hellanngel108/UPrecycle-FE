// components
import SignIn from "./screens/SignIn";
// others
import CONSTANTS from "../contants";

const { SIGN_IN } = CONSTANTS.SCREEN_NAMES;

// https://reactnavigation.org/docs/stack-navigator/#presentation
// cardStackScreens: Use the default OS animations for iOS and Android screen transitions.
const cardStackScreens = [
  {
    name: SIGN_IN,
    component: SignIn
  }
];

const appStackScreens = [...cardStackScreens];

export default appStackScreens;
