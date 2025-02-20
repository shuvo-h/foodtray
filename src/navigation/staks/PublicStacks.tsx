import Header from "../../components/shared/Header";
import LandingScreen from "../../screens/public_screens/LandingScreen";
import { TStackScreen } from "../navigation.type";

export const PublicScreenStacks:TStackScreen<"LandingScreen">[] = [
    {
        name:"LandingScreen",
        component: LandingScreen,
        options: {
            title: "Fresh Food Tray",
            headerShown: true,
            header: ()=><Header title="Landing Page" />
        }
    }
]
