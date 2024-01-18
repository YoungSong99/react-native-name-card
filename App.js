import {View} from "react-native";
import {ProfileCard} from "./components/Profile/ProfileCard"
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return(
      <SafeAreaProvider>
          <SafeAreaView style={{flex:1, justifyContent: "center"}}>
              <ProfileCard/>
          </SafeAreaView>
      </SafeAreaProvider>
    );
};

