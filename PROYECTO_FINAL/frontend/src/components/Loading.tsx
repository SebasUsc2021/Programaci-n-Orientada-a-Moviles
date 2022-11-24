import AnimatedLottieView from "lottie-react-native";
import React, { FC, useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const Loading: FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animation = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    animation.current!.play();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 100,
        },
      ]}
    >
      <View
        style={{
          width: "110%",
          height: "100%",
          position: "absolute",
          backgroundColor: "#3999B2",
          opacity: 0.3,
        }}
      />
      <View
        style={{
          height: "100%",
          width: "100%",
          marginLeft: 20,
          justifyContent: "center",
        }}
      >
        <AnimatedLottieView
          ref={animation}
          loop
          autoPlay
          source={require("../images/loading.json")}
        />
      </View>
    </Animated.View>
  );
};

export default Loading;
