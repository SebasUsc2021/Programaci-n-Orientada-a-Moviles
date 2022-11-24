import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { RootStackParamList } from "../constants/routes";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const Register: FC<Props> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valPassword, setValPassword] = useState("");

  const handleRegister = async () => {
    navigation.popToTop();
  };

  return (
    <ImageBackground
      source={require("../images/fondo.jpg")}
      style={{ paddingHorizontal: 15, flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Navbar
            hasGoBack
            handleGoBack={() => {
              navigation.goBack();
            }}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              REGISTRATE A EDUBICATE
            </Text>
            <View style={{ width: "100%", marginTop: 20 }}>
              <Input
                label="Nombre"
                info={{
                  keyboardType: "default",
                  placeholder: "Ingrese su nombre",
                  value: name,
                  onChangeText: setName,
                }}
              />
              <Input
                label="Identificación"
                info={{
                  keyboardType: "number-pad",
                  placeholder: "Ingrese su identificación",
                  value: id,
                  onChangeText: setId,
                }}
                style={{ marginTop: 10 }}
              />
              <Input
                label="Correo institucional"
                info={{
                  keyboardType: "email-address",
                  placeholder: "Ingrese su correo institucional",
                  value: email,
                  onChangeText: setEmail,
                }}
                style={{ marginTop: 10 }}
              />
              <Input
                label="Contraseña"
                info={{
                  keyboardType: "default",
                  placeholder: "Ingrese su constraseá",
                  secureTextEntry: true,
                  value: password,
                  onChangeText: setPassword,
                }}
                style={{ marginTop: 10 }}
              />
              <Input
                label="Validar Contraseña"
                info={{
                  keyboardType: "default",
                  placeholder: "Valide su constraseá",
                  secureTextEntry: true,
                  value: valPassword,
                  onChangeText: setValPassword,
                }}
                style={{ marginTop: 10 }}
              />
              <Button
                label="REGISTRARSE"
                info={{
                  style: { marginTop: 20, width: "50%", alignSelf: "center" },
                  onPress: handleRegister,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
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
                  ¿Ya tienes una cuenta?{" "}
                  <Text style={{ textDecorationLine: "underline" }}>
                    Inicia sesión
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register;
