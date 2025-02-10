import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";



function SettingsScreen({ navigation }) {
    return (
      <View>
        <Text onPress={() => navigation.navigate('ProfileSettings')}>Profile Settings</Text>
        <Text onPress={() => navigation.navigate('PaymentSettings')}>Payment Settings</Text>
        <Text onPress={() => navigation.navigate('ThemeSettings')}>Theme Settings</Text>
      </View>
    );
  }
  
  function ProfileSettings() {
    return (
      <View>
        <Text>Profile Settings</Text>
      </View>
    );
  }
  
  function PaymentSettings() {
    return (
      <View>
        <Text>Payment Settings</Text>
      </View>
    );
  }
  
  function ThemeSettings() {
    return (
      <View>
        <Text>Theme Settings</Text>
      </View>
    );
  }
  
  function AppSetting() {
    return (
      <View>
        <Text>AppSetting Settings</Text>
      </View>
    );
  }
  
  
  
  // Nested Stack Navigator for Settings Tab
  const Stack = createNativeStackNavigator();
  function SettingsStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="PaymentSettings" component={PaymentSettings} />
        <Stack.Screen name="ThemeSettings" component={ThemeSettings} />
      </Stack.Navigator>
    );
  }
  

const Tab = createBottomTabNavigator();
export function TabNavigatorSetting() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="app_setting" component={AppSetting} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
}