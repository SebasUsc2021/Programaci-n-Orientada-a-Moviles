import { FC, ComponentProps } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
  info?: ComponentProps<typeof TouchableOpacity>;
}

const Button: FC<Props> = ({ label, info }) => {
  return (
    <TouchableOpacity {...info}>
      <View
        style={{
          backgroundColor: "#0029FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 12,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
