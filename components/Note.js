import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const Note = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="40"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
      </Svg>
    </View>
  );
};

export { Note };
