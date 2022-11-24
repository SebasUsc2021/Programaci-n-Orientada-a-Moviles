import { FC, memo, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/routes";
import Navbar from "../components/Navbar";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState({
    image: "http://placekitten.com/200/300",
    name: "Andrea Jimenez",
    courses: [
      {
        id: "1",
        name: "Español",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio incidunt laboriosam, dolorem quisquam delectus reiciendis perferendis nisi non eius minus.",
        image: "http://placekitten.com/200/300",
      },
      {
        id: "2",
        name: "Español",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio incidunt laboriosam, dolorem quisquam delectus reiciendis perferendis nisi non eius minus.",
        image: "http://placekitten.com/200/300",
      },
      {
        id: "3",
        name: "Español",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio incidunt laboriosam, dolorem quisquam delectus reiciendis perferendis nisi non eius minus.",
        image: "http://placekitten.com/200/300",
      },
      {
        id: "4",
        name: "Español",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio incidunt laboriosam, dolorem quisquam delectus reiciendis perferendis nisi non eius minus.",
        image: "http://placekitten.com/200/300",
      },
    ],
  });

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../images/fondo.jpg")}
        style={{ paddingHorizontal: 15, paddingTop: 20 }}
      >
        <Navbar
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
            source={{ uri: user.image }}
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
            {user.name}
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>CURSOS</Text>
          <View style={{ display: "flex", height: "77%" }}>
            <FlatList
              style={{ marginTop: 10, paddingHorizontal: 10, flexGrow: 0 }}
              keyExtractor={({ id }) => id}
              data={user.courses}
              renderItem={({ item }) => (
                <Item
                  {...item}
                  onPress={() => navigation.push("Teacher", { id: item.id })}
                />
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

interface ItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  onPress: () => void;
}

const Item = memo<ItemProps>(({ description, image, name, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={{ uri: image }}
          style={{ borderRadius: 15, width: 100, height: 100 }}
        />
      </View>
      <View style={{ display: "flex", flex: 2, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", color: "white" }}>{name}</Text>
        <Text style={{ color: "white" }}>{description}</Text>
        <TouchableOpacity onPress={onPress}>
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

export default Home;
