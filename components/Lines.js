import { View } from "react-native";
import Svg, { Line } from "react-native-svg";

const Lines = () => {
  return (
    <View>
      <Svg>
        <Line x1="0" y1="16" x2="100" y2="16" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="32" x2="100" y2="32" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="48" x2="100" y2="48" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="64" x2="100" y2="64" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="80" x2="100" y2="80" stroke="black" strokeWidth="1" />
      </Svg>
    </View>
  );
};

export { Lines };
