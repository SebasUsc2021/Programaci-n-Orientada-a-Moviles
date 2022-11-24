import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/views/Login";
import RecoverPassword from "./src/views/RecoverPassword";
import Register from "./src/views/Register";
import Home from "./src/views/Home";
import Teacher from "./src/views/Teacher";
import CodeRecoverPassword from "./src/views/CodeRecoverPassword";
import NewRecoverPassword from "./src/views/NewRecoverPassword";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "./src/hooks/useAuth";

const Stack = createNativeStackNavigator();

const Initial = () => {
  const auth = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {!auth.getUser.login ? (
            <>
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
                name="CodeRecoverPassword"
                component={CodeRecoverPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewRecoverPassword"
                component={NewRecoverPassword}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar animated translucent />
    </View>
  );
};

export default Initial;
