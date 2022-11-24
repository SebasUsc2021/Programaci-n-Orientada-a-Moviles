import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as MailComposer from "expo-mail-composer";
import { FC, memo, useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { RootStackParamList } from "../constants/routes";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Teacher: FC<Props> = ({ navigation }) => {
  const [teacher, setTeacher] = useState({
    image: "http://placekitten.com/200/300",
    name: "ARTURO PEREZ",
    assignatures: [
      ["1", "2", "3"],
      ["a", "b", "c"],
      ["1", "2", "3"],
      ["a", "b", "c"],
    ],
  });

  useEffect(() => {}, []);

  return (
    <ImageBackground
      source={require("../images/fondo.jpg")}
      style={{ paddingHorizontal: 15, flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Navbar
            hasGoBack
            handleGoBack={() => navigation.goBack()}
            hasMenu
            handleMenu={() => {
              Alert.alert(
                "Cerrando sesión",
                "¿Estás seguro que deseas cerrar sesión?",
                [
                  { style: "cancel", text: "Seguir en la aplicación" },
                  {
                    style: "destructive",
                    text: "Cerrar sesión",
                    onPress: () => {
                      navigation.popToTop();
                    },
                  },
                ]
              );
            }}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Image
              source={{ uri: teacher.image }}
              style={{
                width: 160,
                height: 160,
                borderRadius: 80,
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
              {teacher.name}
            </Text>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              HORARIOS DEL DOCENTE
            </Text>
            <Table style={{ marginTop: 20 }}>
              <Row
                data={["ASIGNATURA", "SALÓN", "HORARIO"]}
                textStyle={{
                  fontWeight: "bold",
                  color: "white",
                  alignSelf: "center",
                  paddingVertical: 5,
                  fontSize: 15,
                }}
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.8)",
                  marginBottom: 10,
                }}
              />
              <Rows
                data={teacher.assignatures}
                textStyle={{
                  fontWeight: "bold",
                  color: "white",
                  alignSelf: "center",
                  paddingVertical: 5,
                  fontSize: 15,
                }}
                style={{ backgroundColor: "rgba(52, 52, 52, 0.8)" }}
              />
            </Table>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button
              label="ENVIAR CORREO"
              style={{ alignSelf: "center" }}
              info={{
                onPress: async () => {
                  if (await MailComposer.isAvailableAsync()) {
                    await MailComposer.composeAsync({
                      subject: "sirzes02@gmail.com",
                      body: "Mensaje de prueb",
                    });
                  }
                },
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

interface ItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Item = memo<ItemProps>(({ description, id, image, name }) => {
  return (
    <View
      style={{
        backgroundColor: "gray",
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
      }}
    >
      <View>
        <View
          style={{
            borderRadius: 15,
            width: 100,
            height: 100,
            backgroundColor: "black",
          }}
        />
      </View>
      <View style={{ display: "flex", flex: 2, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text>{description}</Text>
        <TouchableOpacity>
          <View
            style={{
              width: "50%",
              backgroundColor: "#0029FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 2,
              borderRadius: 7,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              ENTRAR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default Teacher;
