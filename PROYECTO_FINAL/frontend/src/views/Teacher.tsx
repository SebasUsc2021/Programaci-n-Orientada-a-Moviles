import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import * as MailComposer from "expo-mail-composer";
import { FC, useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  RefreshControl,
} from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { DOMAIN } from "../constants/env";
import { RootStackParamList } from "../constants/routes";
import { useAuth } from "../hooks/useAuth";

type Props = NativeStackScreenProps<RootStackParamList, "Teacher">;

const Teacher: FC<Props> = ({ navigation, route }) => {
  const auth = useAuth();

  const [teacher, setTeacher] = useState<{
    image: string;
    name: string;
    assignatures: string[][];
  }>({
    image: "",
    name: "",
    assignatures: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    const resCourse = await axios.get(
      DOMAIN + "/api/teacher?id=" + route.params.id
    );

    setTeacher({
      name: resCourse.data.result.c003_nombre,
      image: resCourse.data.result.c003_imagen,
      assignatures: resCourse.data.result.info.map((i: any) => [
        i.c002_nombre,
        i.c002_salon,
        i.c002_horario,
      ]),
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ImageBackground
      source={require("../images/fondo.jpg")}
      style={{ paddingHorizontal: 15, flex: 1 }}
    >
      {isLoading && <Loading />}
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
          }
          showsVerticalScrollIndicator={false}
        >
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
                      auth.signOut();
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

export default Teacher;
