import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation.type";
import { Button, Text, View } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";


type TProps = NativeStackScreenProps<RootStackParamList, "LandingScreen">;
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, "HomeScreen">;


const LandingScreen: React.FC<TProps> = () => {
    const navigation = useNavigation<RootNavigationProp>();

    const goToPostsScreen = () => {
        navigation.navigate("HomeScreen", {
          screen: "PostsScreen", // ✅ Navigate directly to PostsScreen
          params: { userId: 123002 }, // ✅ Pass userId properly
        });
    };
    

  return (
    <View>
      <Text>Landing Screen</Text>
      <Button title="Go to Posts" onPress={goToPostsScreen} />;
    </View>
  );
};

export default LandingScreen;
