import { FC } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/routes";
import Navbar from "../components/Navbar";

type Props = NativeStackScreenProps<RootStackParamList, "RecoverPassword">;

const RecoverPassword: FC<Props> = ({ navigation }) => {
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
                label="Correo electrónico"
                info={{
                  keyboardType: "email-address",
                  placeholder: "Ingrese su correo",
                }}
              />
              <Button
                label="ENVIAR CÓDIGO"
                info={{
                  style: { marginTop: 20, width: "50%", alignSelf: "center" },
                  onPress: () => {
                    navigation.navigate("CodeRecoverPassword", { email: "" });
                  },
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RecoverPassword;
