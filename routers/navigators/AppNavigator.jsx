// libs
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// others
import CONSTANTS from "../../contants";
import appStackScreens from "../appStackScreens";

const Stack = createNativeStackNavigator();

const { SIGN_IN } = CONSTANTS.SCREEN_NAMES;

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={SIGN_IN}
    screenOptions={{
      headerShown: false
    }}
  >
    {appStackScreens.map(({ name, component, options }) => (
      <Stack.Screen key={name} {...{ name, component, options }} />
    ))}
  </Stack.Navigator>
);

export default AppNavigator;
