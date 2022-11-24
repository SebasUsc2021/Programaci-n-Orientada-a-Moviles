import { FC, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/routes";
import Navbar from "../components/Navbar";

type Props = NativeStackScreenProps<RootStackParamList, "NewRecoverPassword">;

const NewRecoverPassword: FC<Props> = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [valPassword, setValPassword] = useState("");

  const handleChangePassword = async () => {
    Alert.alert("Cambio de contraseña", "¡Contraseña cambiada con exito!", [
      {
        style: "default",
        text: "Aceptar",
        onPress: () => {
          navigation.popToTop();
        },
      },
    ]);
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
            <Image
              source={require("../images/logo.png")}
              style={{ width: 160, height: 180 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 30 }}>
              RECUPERAR CONTRASEÑA
            </Text>
            <View style={{ width: "100%", marginTop: 20 }}>
              <Input
                label="Contraseña"
                info={{
                  keyboardType: "default",
                  placeholder: "Ingrese su contraseña",
                  secureTextEntry: true,
                  value: password,
                  onChangeText: setPassword,
                }}
              />
              <Input
                label="Validar contraseña"
                info={{
                  keyboardType: "default",
                  placeholder: "valide su contraseña",
                  secureTextEntry: true,
                  value: valPassword,
                  onChangeText: setValPassword,
                }}
                style={{ marginTop: 10 }}
              />
              <Button
                label="CAMBIAR CONTRASEÑA"
                info={{
                  style: { marginTop: 20, width: "60%", alignSelf: "center" },
                  onPress: handleChangePassword,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NewRecoverPassword;
