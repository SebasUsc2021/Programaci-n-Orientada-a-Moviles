import { FC, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/routes";
import axios from "axios";
import { DOMAIN } from "../constants/env";
import Loading from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: FC<Props> = ({ navigation }) => {
  const auth = useAuth();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const res = await axios.post(DOMAIN + "/api/login", {
      email: name,
      password,
    });

    if (res.data.result) {
      auth.signIn({ login: true, email: name, id: res.data.result.c001_id });
    } else {
      Alert.alert("Error en credenciales", "Usuario no encontrado", [
        { style: "default", text: "Aceptar" },
      ]);
    }
    setIsLoading(false);
  };

  return (
    <ImageBackground
      source={require("../images/fondo.jpg")}
      style={{ paddingHorizontal: 15, flex: 1 }}
    >
      {isLoading && <Loading />}
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Image
              source={require("../images/logo.png")}
              style={{ width: 160, height: 180 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 30 }}>
              BIENVENIDO A EDUBICATE
            </Text>
            <View style={{ width: "100%", marginTop: 20 }}>
              <Input
                label="Nombre de usuario"
                info={{
                  keyboardType: "number-pad",
                  placeholder: "Ingrese su cédula",
                  value: name,
                  onChangeText: setName,
                }}
              />
              <Input
                label="Contraseña"
                info={{
                  keyboardType: "default",
                  secureTextEntry: true,
                  placeholder: "Ingrese su contraseña",
                  value: password,
                  onChangeText: setPassword,
                }}
                style={{ marginTop: 10 }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RecoverPassword");
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 5,
                    alignSelf: "flex-end",
                    textDecorationLine: "underline",
                  }}
                >
                  ¿Olvidó su contraseña?
                </Text>
              </TouchableOpacity>
              <Button
                label="INICIAR SESIÓN"
                info={{
                  style: { marginTop: 20, width: "50%", alignSelf: "center" },
                  onPress: handleLogin,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 10,
                    alignSelf: "center",
                  }}
                >
                  ¿No tienes cuenta?{" "}
                  <Text style={{ textDecorationLine: "underline" }}>
                    Registrate
                  </Text>
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 20,
                  height: 1,
                  width: "100%",
                  backgroundColor: "white",
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                Ingresa con tu cuenta
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "white",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={require("../images/google.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
