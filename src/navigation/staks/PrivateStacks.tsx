import { ComponentType } from "react";
import Header from "../../components/shared/Header";
import Home from "../../screens/home/PostsScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import { RootStackParamList, TStackScreen } from "../navigation.type";
import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeBtmTabs from "../tabs/HomeBtmTabs";




export const PrivateScreenStacks: Array<{
    name: keyof RootStackParamList;
    component: React.ComponentType<any>;
    options?: NativeStackNavigationOptions;
  }>  = [
  {
    name: "HomeScreen",
    component: HomeBtmTabs,
    options: {
      title: "Home",
      headerShown: true,
      header: () => <Header title="My App Home" />,
    },
  },
  {
    name: "ProfileScreen",
    component: ProfileScreen,
    options: {
      title: "Profile",
      headerShown: true,
      header: () => <Header title="My App Profile" />,
    },
  },
];

  