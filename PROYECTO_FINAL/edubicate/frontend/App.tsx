import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import CodeRecoverPassword from "./src/views/CodeRecoverPassword";
import Home from "./src/views/Home";
import Login from "./src/views/Login";
import NewRecoverPassword from "./src/views/NewRecoverPassword";
import RecoverPassword from "./src/views/RecoverPassword";
import Register from "./src/views/Register";
import Teacher from "./src/views/Teacher";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecoverPassword"
            component={RecoverPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Teacher"
            component={Teacher}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CodeRecoverPassword"
            component={CodeRecoverPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewRecoverPassword"
            component={NewRecoverPassword}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar animated translucent />
    </View>
  );
}
