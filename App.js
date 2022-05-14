// libs
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./routers/navigators/AppNavigator";

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
