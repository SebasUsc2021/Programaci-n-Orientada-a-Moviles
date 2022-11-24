import { FC, ComponentProps } from "react";
import { View, Text, TextInput, StyleProp, ViewStyle } from "react-native";

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
  info?: ComponentProps<typeof TextInput>;
}

const Input: FC<Props> = ({ label, info, style }) => {
  return (
    <View style={style}>
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          color: "white",
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "white",
          color: "black",
          borderRadius: 15,
        }}
        {...info}
      />
    </View>
  );
};

export default Input;
