import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ComponentType } from "react";
import { RouteProp } from "@react-navigation/native";
import { HomeTabParamList } from "./tabs/HomeBtmTabs";

// Define Root Stack Params
export type RootStackParamList = {
  LandingScreen: undefined;
  HomeScreen: { screen?: keyof HomeTabParamList; params?: any; userId?: number }; // ✅ Allow nested screen navigation
  ProfileScreen: { profileId: number; email:string };
};



// Define Types for Navigation and Routes
export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
export type RouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;

// Define Stack Screen Type
export type TStackScreen<T extends keyof RootStackParamList> = {
  name: T;
  component: ComponentType<NativeStackScreenProps<RootStackParamList, T>>; // ✅ Fix Here
  options?: NativeStackNavigationOptions;
};
