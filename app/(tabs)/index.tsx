import { vars } from "nativewind";
import { Text, View } from "react-native";

const theme = vars({
  "--theme-fg": "green",
});

const App = () => {
  return (
    <View className="flex-1 items-center justify-center" style={theme}>
      <Text className="font-bold text-[--theme-fg] ">Variables!</Text>
      <Text className="font-bold active:scale-150 active:text-[--theme-fg] transition">
        Transitions
      </Text>
      <Text className="font-bold animate-bounce">Animations</Text>
    </View>
  );
};

export default App;
